// Сообщения статей
const notFindUserArticle = 'У пользователя нет сохранненых статей';
const errorValidationAddArticle = 'Не удалось создать статью - данные не прошли валидацию';
const notFoundArticle = 'Новость не найдена';
const errorDeleteArticleUnauth = 'Произошла ошибка! Удаление чужой статьи невозможно';
const articleDeleteSucces = 'Новость удалена';
const badIdArticle = 'Передан некорректеный id статьи';
const badLinkArticle = 'Поле link не прошло валидацию';
const badLinkImageArticle = 'Поле image не прошло валидацию';

// Сообщения пользователей
const notFoundUser = 'Пользователь не найден';
const errorValidationUser = 'Неправильная почта или пароль';
const errorConflictEmail = 'Используйте другие данные для регистрации';
const errorAuthorized = 'Не удалось войти! Проверьте почту и пароль';

// Сообщение об авторизации
const errorAuthorizationRequired = 'Необходима авторизация';

// Сообщение о сервере
const errorServerMessage = 'На сервере произошла ошибка!';
const errorLimit = 'Не более 100 запросов в течении 10 минут';

module.exports = {
  notFindUserArticle,
  errorValidationAddArticle,
  notFoundArticle,
  errorDeleteArticleUnauth,
  articleDeleteSucces,
  badIdArticle,
  badLinkArticle,
  badLinkImageArticle,
  notFoundUser,
  errorValidationUser,
  errorConflictEmail,
  errorAuthorized,
  errorAuthorizationRequired,
  errorServerMessage,
  errorLimit,
};
