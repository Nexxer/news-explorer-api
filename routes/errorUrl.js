const errorUrl = require('express').Router();
const NotFound = require('../middlewares/errors/notFound');

errorUrl.all('*', (req, res, next) => {
  const err = new NotFound('Запрашиваемый ресурс не найден');
  next(err);
});

module.exports = errorUrl;
