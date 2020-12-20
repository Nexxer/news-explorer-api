const router = require('express').Router();
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const errorUrlRouter = require('./errorUrl');

router.use(
  usersRouter,
  articlesRouter,
  errorUrlRouter,
);

module.exports = router;
