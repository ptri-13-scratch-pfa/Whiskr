const router = require('express').Router();
const path = require('path');
const apiControllers = require('../controllers/apiControllers');

router.get('/cats', apiControllers.getCatsData, (req, res) => {
  res.json(res.locals.cats);
});

router.get('/adopters', apiControllers.getAdoptersData, (req, res) => {
  res.json(res.locals.adopters);
});

module.exports = router;