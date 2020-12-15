const mongoose = require('mongoose');
const valid = require('validator');
const bcrypt = require('bcryptjs');
const { errorValidationUser } = require('../constants/errorMessage');

// Все поля обязательны, email уникален, name длинной от 2 до 30
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => valid.isEmail(v),
      message: 'Ошибка формы почты',
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

/* Проверяет, есть ли пользователь с указанной почтой в базе.
Если пользователь найден, сверяет хеш его пароля */
userSchema.statics.findUserByCredentials = function findUser(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(errorValidationUser));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error(errorValidationUser));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
