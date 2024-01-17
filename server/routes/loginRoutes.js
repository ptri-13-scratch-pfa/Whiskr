const router = require('express').Router();
const path = require('path');
const loginControllers = require('../controllers/loginControllers');

router.post('/', loginControllers.verifyUser, (req, res) => {
  res.json(res.locals.users);
});

module.exports = router;
