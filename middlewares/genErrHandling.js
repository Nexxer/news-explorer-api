const { errorServerMessage } = require('../constants/errorMessage');

const genErrHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? errorServerMessage : message,
  });
  next();
};

module.exports = genErrHandler;
