const router = require('express').Router();
const path = require('path');
const loginControllers = require('../controllers/loginControllers');

router.post('/', loginControllers.verifyUser, (req, res) => {
  res.send({ 'users: ': res.locals.users });
});

module.exports = router;
