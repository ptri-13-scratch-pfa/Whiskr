const bcrypt = require('bcryptjs');
const userModel = require('../models/models.js');

const loginControllers = {};

loginControllers.verifyUser = async (req, res, next) => {
  const { email, password, profileType } = req.body;

    try {
      const registered = await userModel.User.findOne({
         email
      })
      if(registered) {
        console.log('>>> found user in the database: ', registered);
      }
      if(!registered) {
        res.status(401).json('No user found in the database!');
      }


    bcrypt.compare(req.body.password, registered.password, (err, result) => {
      if (err) {
        next('Error in loginController.verifyUsers: ' + JSON.stringify(err));
      }

      if (result) {
        console.log('Email and password matches')
        res.locals.users = { email, profileType };
        // res.cookie('id', registered._id.toString());
        return next();
      } else {
        return next({
          log: 'User and Password is not matched with records!',
          status: 500,
          message: { err: 'User and Password is not matched with records!' },
        });
      }
    });
  } catch (err) {
    return next( { message: { err:'Error in loginController.verifyUser: ' + JSON.stringify(err) }});
    }
  }

// loginControllers.setCookie = async (req, res, next) => {
//     const email = req.body.email;
//     const user = await userModel.User.findOne({ email });
//     userID = user._id.toString();
//     console.log('Setting cookie userID:', userID);
//     res.cookie('id', userID);
//     return next();
// }

module.exports = loginControllers;
