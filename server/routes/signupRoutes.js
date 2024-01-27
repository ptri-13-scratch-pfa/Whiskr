const router = require('express').Router();
const path = require('path');
const userController = require('../controllers/userController');
const cookieControllers = require('../controllers/cookieControllers')

//post requests should have a status of 201
router.post('/', userController.createUser, cookieControllers.setCookie, (req, res) => {
  // return res.status(201).json(res.locals._id);
  return res.status(201).json({id: res.locals._id});
});

module.exports = router;
