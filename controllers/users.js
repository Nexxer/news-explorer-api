require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFound = require('../middlewares/errors/notFound');
const BadRequest = require('../middlewares/errors/badRequest');
const Conflict = require('../middlewares/errors/conflict');
const UnAuthorized = require('../middlewares/errors/unAuthorized');
const {
  notFoundUser,
  errorValidationUser,
  errorConflictEmail,
  errorAuthorized,
} = require('../constants/errorMessage');
const {
  jwtSecret,
  saltValue,
  timeJWT,
} = require('../configs/config');

const { JWT_SECRET = jwtSecret } = process.env;

// возвращает информацию о пользователе (email и имя)
const getUser = (req, res, next) => {
  User.findById(req.body._id)
    .then((user) => {
      if (!user) {
        throw new NotFound(notFoundUser);
      }
      res.send({
        name: user.name,
        email: user.email,
      });
    })
    .catch(next);
};

// Cоздаёт пользователя с переданными в теле email, password и name
const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, saltValue)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new BadRequest(errorValidationUser);
        return next(error);
      }
      if (err.keyPattern.email === 1) {
        const error = new Conflict(errorConflictEmail);
        return next(error);
      }
      return next(err);
    })
    .catch(next);
};

// Проверяет переданные в теле почту и пароль и возвращает JWT
const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (!user) {
        throw new UnAuthorized(errorAuthorized);
      }
      const { id } = user;
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: timeJWT });
      res.send({ token, id });
    })
    .catch((err) => {
      const error = new UnAuthorized(err.message);
      return next(error);
    });
};

module.exports = { getUser, createUser, loginUser };
