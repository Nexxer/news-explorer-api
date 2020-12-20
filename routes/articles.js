const articlesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { getArticles, addArticle, deleteArticle } = require('../controllers/articles');
const auth = require('../middlewares/auth');
const { badLinkArticle, badLinkImageArticle } = require('../constants/errorMessage');

// Защищаем роуты
articlesRouter.use(auth);

// Возвращает все сохранённые пользователем статьи
articlesRouter.get('/articles', getArticles);

// Создаёт статью с переданными в теле данными
articlesRouter.post('/articles', celebrate({
  body: Joi.object().keys({
    keyword: Joi
      .string()
      .required(),
    title: Joi
      .string()
      .required(),
    text: Joi
      .string()
      .required(),
    date: Joi
      .string()
      .required(),
    source: Joi
      .string()
      .required(),
    link: Joi
      .string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message(badLinkArticle);
      }),
    image: Joi
      .string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.messages(badLinkImageArticle);
      }),
  }),
}), addArticle);

// удаляет сохранённую статью  по _id
articlesRouter.delete('/articles/:articleId', celebrate({
  params: Joi
    .object()
    .keys({
      articleId: Joi
        .string()
        .alphanum()
        .length(24),
    }).unknown(true),
}), deleteArticle);

module.exports = articlesRouter;
