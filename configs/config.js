const mongoUrl = 'mongodb://localhost:27017/newsdb';
const portExpress = 3000;
const jwtSecret = 'secret';
const saltValue = 10;
const timeJWT = '7d';
const limitConfig = {
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: 'Не более 100 запросов в течении 10 минут',
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
