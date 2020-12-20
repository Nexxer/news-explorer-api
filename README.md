<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://pictures.s3.yandex.net/resources/default_1603981368.svg" alt="Project logo"></a>
</p>

<h3 align="center">News Explorer API</h3>

<p >Backend дипломного проекта курса веб-разработчика Яндекс.Практикум</p>

## 📝 Оглавление

- [Об API](#about)
- [Используемые технологии](#built_using)
- [Установка и запуск](#getting_started)
- [Запросы к API](#usage)
- [Ссылки](#links)

## 🧐 Об API <a name = "about"></a>

- регистрация пользователя
- авторизация пользователя
- создание статей
- сохранение статей
- удаление статей

## ⛏️ Используемые технологии<a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/)

## 🏁 Установка и запуск <a name = "getting_started"></a>

- Клонировать репозиторий командой:
`git clone https://github.com/Nexxer/news-explorer-api.git`
- Установить зависимости командой:
`npm install`
- запустить сервер MongoDB командой:
`mongo`
- запустить API командой: `npm run start`

## 🎈 Запросы к API<a name="usage"></a>

`POST /signup`
создаёт пользователя с переданными в теле email, password и name

`POST /signin`
проверяет переданные в теле почту и пароль и возвращает JWT

`GET /users/me`
 возвращает информацию о пользователе (email и имя)

`GET /articles`
возвращает все сохранённые пользователем статьи

`POST /articles`
 создаёт статью с переданными в теле owner, keyword, title, text, date, source, link и image

`DELETE /articles/articleId `
удаляет сохранённую статью  по _id

## 🌍 Ссылки <a name = "links"></a>
Обратиться к API в сети интернет можно по адресу:
<a>api.neknews.students.nomoreparties.xyz</a>
