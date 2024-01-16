const model = require('../models/models.js');
const apiControllers = {};

apiControllers.getCatsData = async (req, res, next) => {
  console.log('apiControllers.getCatsdata is active')
  try {
    const cats = await model.Cat.find()
    res.locals.cats = cats
    console.log('res.locals.cats:', res.locals.cats);
    return next()
  } catch (err) {
    return next(err)
  }
}

module.exports = apiControllers;