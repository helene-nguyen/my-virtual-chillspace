# Start a server

## Introduction

Server configuration using Express Framework on NodeJS environment.

## Steps to start the server

- To start the server, you need to install NodeJS on your computer.

```sh
npm i
```

```sh
npm run start
```

## Steps to reproduce

```sh
npm init
```

- Create 2 folders : app + public
- In folder app : main folders controllers, db, models, routes, views
- In public folder : sass, js
- Create .gitignore file
- Create .env and .env.example file
- Create entrypoint index.js (or app.js or server.js)
- Configure package.json
- Get packages modules

- Dependencies

```sh
npm i express dotenv ejs
```

- Development dependencies

```sh
npm i -D debug
```

Architecture MVC

Model : contains data
View : contains graphical interface to render
Controller : contains the logic when an action is executed from the user

---

## Create fake database

User structure

```js
    {
        "id": 1,
        "username": "François",
        "role": "admin"
    },
```

Quote structure

```js
    {
        "quote": "",
        "actor": "",
        "author": "",
        "season": "",
        "title": "",
        "episode": ""
    },
```

Article structure

```js
  {
    "id": 1,
    "title": "Function-based multi-state access",
    "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet",
    "user_id":6,
    "category_id": 1,
    "created_at": "9/16/2022"
  },
```

Category structure

```js
    {
        "id":1,
        "name": "javascript"
    },
```

Media structure

```js
['media_name.mp3'];
```

---

## Endpoints

- quotes random for fun
- all articles
- all authors

Navbar structure

- Articles
- Authors
- Chillspace

Endpoints
All articles

- /articles
  One article
- /articles/:id
  All authors
- /authors
  One author
- /authors/:id
  All articles from one author
- /authors/:id/articles
  All categories
- /categories
  All articles from a category
- /categories/:id/articles
  Chillspace
- /chillspace

---

Sources :