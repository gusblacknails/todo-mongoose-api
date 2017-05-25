const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require ('path')

const getPass = require  ('./routes/middlewares/getPass')
const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3001

const app = express()

mongoose.Promise = Promise
mongoose.connect(dbUrl)


app.set("view engine", 'pug')
app.set('views',path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/middleware', getPass)
app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);