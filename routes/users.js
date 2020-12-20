const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getUser, createUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

usersRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi
      .string()
      .required()
      .email(),
    password: Joi
      .string()
      .required(),
    name: Joi
      .string()
      .required()
      .min(2)
      .max(30),
  }),
}), createUser);

usersRouter.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required(),
  }),
}), loginUser);

// Защищаем роуты
usersRouter.use(auth);

usersRouter.get('/users/me', getUser);

module.exports = usersRouter;
