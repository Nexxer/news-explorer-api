// Сообщения ошибок статей
const notFindUserArticle = 'У пользователя нет сохранненых статей';
const errorValidationAddArticle = 'Для создания карточки не хватает данных';
const notFoundArticle = 'Новость не найдена';
const errorDeleteArticleUnauth = 'Произошла ошибка! Удаление чужой новости невозможно';

// Сообщения ошибок пользователей
const notFoundUser = 'Пользователь не найден';
const errorValidationUser = 'Проверьте введенные данные';
const errorConflictEmail = 'Используйте другие данные для регистрации';
const errorAuthorized = 'Не удалось войти! Проверьте почту и пароль';

// Сообщение об авторизации
const errorAuthorizationRequired = 'Необходима авторизация';

// Сообщение об ошибке сервера
const errorServerMessage = 'На сервере произошла ошибка!';

module.exports = {
  notFindUserArticle,
  errorValidationAddArticle,
  notFoundArticle,
  errorDeleteArticleUnauth,
  notFoundUser,
  errorValidationUser,
  errorConflictEmail,
  errorAuthorized,
  errorAuthorizationRequired,
  errorServerMessage,
};
