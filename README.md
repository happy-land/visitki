# Проектная работа в рамках спринта "Второй проектный месяц" на курсе веб-разработчик+ от yandex.practicum
____

## Обзор
 1. Описание проекта
 2. Функциональность проекта
 3. Технологии проекта
 4. Команда проекта
 5. Текущая реализация
____

### 1. Описание проекта
В рамках спринта реализована Платформа-визитница Visitki. 
Цели спринта:
- Закрепить опыт коллективной разработки;
- Получить опыт рефакторинга готового проекта;
- Освоить инструменты для прокачки хардов и софтов;
- Пополнить портфолио.
### 2. Функциональность проекта
Запланированная функцмональность:
- Заполнение собственной визитки.
- Просмотр всех визиток когорты.
- Просмотр детальной версии визитки.
- Комментирование (или реакция эмоджи) визитки целиком или отдельных её блоков.
- Просмотр комментариев (реакций) на свою визитку (недоступно другим студентам).
- Пост-модерация реакций (для кураторов).
- Добавление новых студентов (для кураторов).
- Изменение данных студентам (для кураторов).
- Просмотр студентов когорты на карте

Подробный бриф проекта: https://www.notion.so/VISITKI-89b6b56fbef743c5833b6fb483c50817
Макеты в фигме: https://www.figma.com/file/nKBudPP12bvNm15W486Y9R/WEB_RUS_STUD_soft_skills?node-id=36%3A4&t=CQpvQK7rO8jl8l3f-1


### 3. Технологии проекта
На текущий момент в проекте использован следующий стек:
- React
- React Router
- CSS
- TypeScript
- библиотека react-yandex-maps

### 4. Команда проекта
**Когорта 11 (lime), команда №4:**
- Руслан Кулиш (team lead)
- Никита Перепелицын
- Максим Тютюнов
- Анна Силина
- Елизавета Циприс

### 5. Текущая реализация:
Все реализация построена на тестовых данных, приходящих от заглушки https://visitki.practicum-team.ru

- при переходе по адресу /login отрисовывается страница авторизации
- по клику на кнопку авторизации через Яндекс ID, происходит авторизаци, после авторизации перекидывает на 
  главную
- реализовано отображение карточек на главной с бесконечной прокруткой
- по клику на карточку с главной можно перейти на подробную страницу визитки
- при клике на "Посмотреть на карте" октрывается страница с картой и метками студентов (при клике на метку
    открывается превью с аватаром, именем и городом студента)
- для просмотра формы внесения данных необходимо перейти на адрес /form
- для просмотра страницы админки перейи на адрес /admin
- на странице админки пока реализована только отрисовка данных, функциональности добавления студентов пока нет
- на странице админки можно переключаться между вкладками "студенты" и "комментарии"
- Protected Routes пока отключен, так как не реализовано тестовое переключение ролей 



________________________________________________________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
