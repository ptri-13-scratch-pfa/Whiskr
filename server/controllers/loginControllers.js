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
      } else {
        res.status(401).json('No user found in the database!');
      }


      bcrypt.compare(req.body.password, registered.password, async (err, result) => {
        if (err) {
          next('Error in loginController.verifyUsers: ' + JSON.stringify(err));
        }

        if (result) {
          const userid_indatabase = await userModel.User.findOne({email});
          console.log(">>> Email and password matches", userid_indatabase);
          res.locals.userid = userid_indatabase._id;
          res.locals.users = { email, profileType };
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


module.exports = loginControllers;
