const winston = require('winston');
const expressWinston = require('express-winston');
const { fileNameRequestLog, fileNameErrorLog } = require('../configs/config');

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: fileNameRequestLog }),
  ],
  format: winston.format.json(),
});

// логгер ошибок
const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: fileNameErrorLog }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
