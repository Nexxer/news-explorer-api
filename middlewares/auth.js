const jwt = require('jsonwebtoken');
const UnAuthorized = require('./errors/unAuthorized');
const { errorAuthorizationRequired } = require('../constants/errorMessage');
const { jwtSecret } = require('../configs/config');

const handleAuthError = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnAuthorized(errorAuthorizationRequired);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, jwtSecret);
  } catch (error) {
    throw new UnAuthorized(errorAuthorizationRequired);
  }
  req.user = payload;
  return next();
};

module.exports = handleAuthError;
