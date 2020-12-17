const Article = require('../models/article');
const NotFound = require('../middlewares/errors/notFound');
const BadRequest = require('../middlewares/errors/badRequest');
const Forbidden = require('../middlewares/errors/forbidden');
const {
  notFindUserArticle,
  errorValidationAddArticle,
  notFoundArticle,
  errorDeleteArticleUnauth,
  articleDeleteSucces,
} = require('../constants/errorMessage');

// Возвращаем все статьи пользователя
const getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => {
      if (!articles || articles.length === 0) {
        throw new NotFound(notFindUserArticle);
      }
      res.send(articles);
    })
    .catch(next);
};

// Создаёт статью с переданными в теле данными
const addArticle = (req, res, next) => {
  Article.create({ owner: req.user._id, ...req.body })
    .then((article) => {
      const sendArticle = article.toObject();
      delete sendArticle.owner;
      res.send(sendArticle);
    })
    .then((article) => res.send(article))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const error = new BadRequest(errorValidationAddArticle);
        return next(error);
      }
      return next(err);
    })
    .catch(next);
};

// Удаляет статью из сохранненых с проверкой принадлежности
const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId).select('+owner')
    .then((article) => {
      if (!article) {
        throw new NotFound(notFoundArticle);
      }
      if (req.user._id !== article.owner) {
        throw new Forbidden(errorDeleteArticleUnauth);
      }
      article.remove();
      res.send({ message: articleDeleteSucces });
    })
    .catch(next);
};

module.exports = { getArticles, addArticle, deleteArticle };
