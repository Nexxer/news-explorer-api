require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const genErrHandler = require('./middlewares/genErrHandling');
const limit = require('./middlewares/rateLimiter');
const { portExpress, mongoUrl } = require('./configs/config');

const { PORT = portExpress } = process.env;
const app = express();

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);
app.use(limit);
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.use(errorLogger);
app.use(errors());
app.use(genErrHandler);

app.listen(PORT);
