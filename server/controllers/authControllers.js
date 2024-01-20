const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const Profile = require("../models/models.js");

const authControllers = {};

authControllers.verifyToken = (req, res, next) => {
  try {
    let token = req.session.token;
    console.log(">>> token in authControllers.verifyToken: ", token);

    // if there is no tolen for current user
    if (!token) {
      const notoken = {
        log: "Express error handler caught authControllers.verifyToken error",
        status: 400,
        message: { err: "No Token Found" },
      };
      return next(notoken);
    }

    // if there is token then verify its token
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return next(
          "Error in authControllers.verifyToken jwt.verify: " +
            JSON.stringify(err)
        );
      }
      console.log("decoded content in jwt.verify: ", decoded);
      req.userid = decoded.id;
    })
    return next();

  } catch (err) {
    return next("Error in authControllers.verifyToken: " + JSON.stringify(err));
  }
};

module.exports = authControllers;
