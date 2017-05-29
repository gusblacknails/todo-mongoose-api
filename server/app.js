const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require ('path')


const getPass = require  ('./routes/middlewares/getPass')
const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const dbUrl = process.env.DB_URL
const PORT = process.env.PORT
const app = express()



mongoose.Promise = Promise
mongoose.connect(dbUrl)

//app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));

app.set("view engine", 'pug')
app.set('views',path.join(__dirname, 'views'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  require('debug')('body-parser')(req.body)
  next()
})
app.use('/middleware', getPass)
app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);