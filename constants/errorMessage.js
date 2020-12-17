// Сообщения статей
const notFindUserArticle = 'У пользователя нет сохранненых статей';
const errorValidationAddArticle = 'Не удалось создать статью - данные не прошли валидацию';
const notFoundArticle = 'Новость не найдена';
const errorDeleteArticleUnauth = 'Произошла ошибка! Удаление чужой статьи невозможно';
const articleDeleteSucces = 'Новость удалена';

// Сообщения пользователей
const notFoundUser = 'Пользователь не найден';
const errorValidationUser = 'Неправильная почта или пароль';
const errorConflictEmail = 'Используйте другие данные для регистрации';
const errorAuthorized = 'Не удалось войти! Проверьте почту и пароль';
const notEnterPassword = 'Вы не ввели пароль!';

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
  notFoundUser,
  errorValidationUser,
  errorConflictEmail,
  errorAuthorized,
  notEnterPassword,
  errorAuthorizationRequired,
  errorServerMessage,
  errorLimit,
};
