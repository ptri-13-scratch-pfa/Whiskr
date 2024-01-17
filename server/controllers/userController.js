const Profile = require('../models/models.js');
const userController = {};
const bcrypt = require('bcryptjs');

userController.createUser = async (req, res, next) => {
  console.log('* Handling registering a user...');
  try {
    // grab email, password, profileType from request body
    const { email, password, profileType } = req.body;

    // create new user based on info from request body
    const newUser = new Profile.User({
      email: email,
      password: password,
      profileType: profileType,
    });

    // save user in db and send response
    const registeredUser = await newUser.save();
    res.locals.ssid = registeredUser._id;
    return next();
  } catch (err) {
    return next('Error in UserController.createUser: ' + JSON.stringify(err));
  }
};

userController.createAdopter = async (req, res, next) => {
  console.log(req.body);
  const { name, aboutMe, imageUrl, profession, experience } = req.body;

  try {
    if (name && imageUrl && profession) {
      await Profile.Adopter.create({ name, aboutMe, imageUrl, profession, experience })
        return next()
    } else {
      console.log('please input required information');
    }
  } catch (err) {
    return next(
      'Error in UserController.createAdopter: ' + JSON.stringify(err)
    );
  }
};

userController.createCat = async (req, res, next) => {
  const { name, breed, age, aboutMe, imageUrl } = req.body;
  if (!name || !breed || !age || !aboutMe || !imageUrl) {
    console.log('Custom defined error');
    console.log('Req.body: ', req.body);
    return next({
      log: 'Express error handler caught userController.createCat Error',
      status: 500,
      message: { err: 'Missing required fields' },
    });
  }

  try {
    Profile.Cat.create({
      name,
      breed,
      age,
      aboutMe,
      imageUrl,
    })
      .then(next())
      .catch(err => {
        'Error in UserController.createUser into datasets: ' +
          JSON.stringify(err);
      });
  } catch (err) {
    return next(
      'Error in UserController.createAdopter: ' + JSON.stringify(err)
    );
  }
};

module.exports = userController;
