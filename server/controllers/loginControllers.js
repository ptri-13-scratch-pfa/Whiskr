const bcrypt = require('bcryptjs');
const userModel = require('../models/models.js');

const loginControllers = {};

loginControllers.verifyUser = (req, res, next) => {
  const { email, password, profileType } = req.body;

  userModel.User.findOne({
    email: email,
  })
    .then(userres => {
      console.log('>>> find user in the database: ', userres);

      if (!userres) {
        res.status(401).json('No user found in the database!');
      }

      bcrypt.compare(req.body.password, userres.password, (err, result) => {
        if (err) {
          next('Error in loginController.verifyUsers: ' + JSON.stringify(err));
        }

        if (result) {
          res.locals.users = { email, profileType };
          next();
        } else {
          return next({
            log: 'User and Password is not matched with records!',
            status: 500,
            message: { err: 'User and Password is not matched with records!' },
          });
        }
      });
    })
    .catch(err => {
      next('Error in loginController.verifyUser: ' + JSON.stringify(err));
    });
};

module.exports = loginControllers;
