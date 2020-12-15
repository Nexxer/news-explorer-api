const mongoose = require('mongoose');
const valid = require('validator');

// Все поля схемы обязательны, image и link проверяются на соответствие ссылке
const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (v) => valid.isURL(v),
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => valid.isURL(v),
    },
  },
  owner: {
    type: String,
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
