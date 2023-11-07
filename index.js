const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.use(require('./routes/books.route'))
app.use(require('./routes/authors.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/reviews.route'))



mongoose.connect("mongodb+srv://Library:qwerty123@library.d9ufvm0.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(5000, () => {
    console.log('Сервер запущен успешно http://localhost:3000')
})