const router = require('express').Router();
const path = require('path');
const userController = require('../controllers/userController');

router.post('/', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals._id);
});

module.exports = router;
