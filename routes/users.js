const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getUser, createUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

usersRouter.post('/signup', createUser, celebrate({
  body: Joi.object().keys({
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required(),
    name: Joi
      .string()
      .min(2)
      .max(30)
      .required(),
  }),
}));

usersRouter.post('/signin', loginUser, celebrate({
  body: Joi.object().keys({
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required(),
  }),
}));

// Защищаем роуты
usersRouter.use(auth);

usersRouter.get('/users/me', getUser);

module.exports = usersRouter;
