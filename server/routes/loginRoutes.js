const router = require('express').Router();
const path = require('path');
const loginControllers = require('../controllers/loginControllers');
const cookieControllers = require('../controllers/cookieControllers');

router.post('/', loginControllers.verifyUser, cookieControllers.setCookie, (req, res) => {
  res.json(res.locals.users);
});

module.exports = router;
