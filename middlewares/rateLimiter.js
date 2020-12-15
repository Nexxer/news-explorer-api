const rateLimit = require('express-rate-limit');
const { limitConfig } = require('../configs/config');

const limit = rateLimit(limitConfig);

module.exports = limit;
