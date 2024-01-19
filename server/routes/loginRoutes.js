const router = require("express").Router();
const path = require("path");
const loginControllers = require("../controllers/loginControllers");
const sessionController = require("../controllers/sessionController");
const authControllers = require("../controllers/authControllers");

router.post("/",
  loginControllers.verifyUser,
  authControllers.generateToken,
  loginControllers.verifyAdopterOrCat,
  sessionController.isLoggedIn,
  (req, res) => {
    res.json(res.locals.hasAdopterOrCatProfile);
  }
);

router.post("/getAccountType", loginControllers.getAccountType, (req, res) => {
  res.json(res.locals.accountType);
});

router.post(
  "/createAdopterProfile",
  loginControllers.createAdopter,
  (req, res) => {
    return res.status(200).json(res.locals._id);
  }
);

router.post("/createCatProfile", loginControllers.createCat, (req, res) => {
  return res.status(200).json(res.locals._id);
});

module.exports = router;
