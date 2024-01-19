const router = require('express').Router();
const path = require('path');
const userController = require('../controllers/userController');
const cookieControllers = require('../controllers/cookieControllers')

router.post('/', userController.createUser, cookieControllers.setCookie, (req, res) => {
  return res.status(200).json(res.locals._id);
});

module.exports = router;
