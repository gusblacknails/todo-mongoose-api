const Task = require('../../../models/Task')

function getAll(req,res) {

const title = "Tareas Pendientes"
  Task.find()
    .then( tasks => {
    
      res.render('todo', { tasks, title })
    })
    .catch(err => {res.json(err)})

}

module.exports = getAll

//curl localhost:3000/tasks