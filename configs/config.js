require('dotenv');

const errorLimit = require('../constants/errorMessage');

const { NODE_ENV = 'dev', JWT_SECRET, MONGO_PROD } = process.env;
const mongoUrl = NODE_ENV === 'production' ? MONGO_PROD : 'mongodb://localhost:27017/newsdb';
const portExpress = 3000;
const jwtSecret = NODE_ENV === 'production' ? JWT_SECRET : 'secret';
const saltValue = 10;
const timeJWT = '7d';
const limitConfig = {
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: errorLimit,
};
const fileNameRequestLog = 'request.log';
const fileNameErrorLog = 'error.log';

module.exports = {
  mongoUrl,
  portExpress,
  jwtSecret,
  saltValue,
  timeJWT,
  limitConfig,
  fileNameRequestLog,
  fileNameErrorLog,
};
