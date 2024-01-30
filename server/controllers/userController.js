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
    res.locals._id = registeredUser._id;
    return next();
  } catch (err) {
    return next('Error in UserController.createUser: ' + JSON.stringify(err));
  }
};

module.exports = userController;
