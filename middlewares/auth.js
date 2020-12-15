const jwt = require('jsonwebtoken');
const { errorAuthorizationRequired } = require('../constants/errorMessage');
const { jwtSecret } = require('../configs/config');

const { JWT_SECRET = jwtSecret } = process.env;

const handleAuthError = (res) => res
  .status(401)
  .send({ message: errorAuthorizationRequired });

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return handleAuthError(res);
  }
  req.user = payload;
  return next();
};
