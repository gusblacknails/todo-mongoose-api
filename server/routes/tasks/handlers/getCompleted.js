const Task = require('../../../models/Task')

function getCompleted(req,res) {
const title = "Tareas Completadas"
  Task.find()
    .then( tasks => {
    
      res.render('completed', { tasks, title })
    })
    .catch(err => {res.json(err)})

}

module.exports = getCompleted

//curl GET localhost:3000/tasks/completed