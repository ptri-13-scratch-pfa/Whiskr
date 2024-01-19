const router = require('express').Router();
const path = require('path');
const userController = require('../controllers/userController');
const sessionController = require("../controllers/sessionController");

router.post('/', userController.createUser, sessionController.startSession, (req, res) => {
  return res.status(200).json(res.locals.ssid);
});

module.exports = router;
