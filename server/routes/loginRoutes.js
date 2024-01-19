const router = require('express').Router();
const path = require('path');
const loginControllers = require('../controllers/loginControllers');
const cookieController = require("../controllers/cookieController");
const sessionController = require("../controllers/sessionController");

router.post(
  "/",
  loginControllers.verifyUser,
  loginControllers.verifyAdopterOrCat,
  cookieController.setSSIDCookie,
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
