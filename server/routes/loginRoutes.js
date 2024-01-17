const router = require('express').Router();
const path = require('path');
const loginControllers = require('../controllers/loginControllers');
const cookieController = require("../controllers/cookieController");
const sessionController = require("../controllers/sessionController");

router.post('/', loginControllers.verifyUser, cookieController.setSSIDCookie, sessionController.isLoggedIn, (req, res) => {
  res.json(res.locals.users);
});

module.exports = router;
