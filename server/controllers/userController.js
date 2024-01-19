const Profile = require('../models/models.js');
const userController = {};

const bcrypt = require('bcryptjs');

// Register user
userController.createUser = async (req, res, next) => {
  console.log('* Handling registering a user...');

  try {
    const { email, password, profileType } = req.body;

    // Handle missing fields
    if ((!email, !password, !profileType)) {
      const missingFieldsErr = {
        log: 'Express error handler caught userController.createAdopter error',
        status: 400,
        message: { err: 'Missing required fields' },
      };
      return next(missingFieldsErr);
    }

    // Handle existing email
    const existingEmail = await Profile.User.findOne({ email: email }); // returns doc or null
    if (existingEmail) {
      const existingEmailErr = {
        log: 'Express error handler caught userController.registerUser error',
        status: 400,
        message: { err: 'Email already registered' },
      };
      return next(existingEmailErr);
    }

    // Create new user from info provided in req body
    const newUser = new Profile.User({
      email: email,
      password: password,
      profileType: profileType,
    });

    // save user in db and send response
    const registeredUser = await newUser.save();
    console.log('* User successfully saved to db: ', registeredUser);
    res.locals.ssid = registeredUser._id;
    res.locals._id = registeredUser._id;
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

