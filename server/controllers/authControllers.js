const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");

const authControllers = {};

authControllers.generateToken = (req, res, next) => {
  try {
    const jwtToken = jwt.sign({
      id: res.locals.userid,
      email: res.locals.userEmail,
    });
    console.log(">>> jwtTolen in authControllers.generateToken: ", jwtToken);

    res.cookie("api-auth", jwtToken, {
      secure: false,
      httpOnly: true,
      expires: dayjs().add(7, "days").toDate(),
    });

    return next();
  } catch (err) {
    return next(
      "Error in authControllers.generateToken: " + JSON.stringify(err)
    );
  }
};

module.exports = authControllers;
