const articlesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getArticles, addArticle, deleteArticle } = require('../controllers/articles');
const auth = require('../middlewares/auth');

// Защищаем роуты
articlesRouter.use(auth);

// Возвращает все сохранённые пользователем статьи
articlesRouter.get('/articles', getArticles);

// Создаёт статью с переданными в теле данными
articlesRouter.post('/articles', addArticle, celebrate({
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
      .pattern(/(https ?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/)
      .required(),
    image: Joi
      .string()
      .pattern(/(https ?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/)
      .required(),
  }),
}));

// удаляет сохранённую статью  по _id
articlesRouter.delete('/articles/articleId', deleteArticle);

module.exports = articlesRouter;
