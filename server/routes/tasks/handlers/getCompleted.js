const Task = require('../../../models/Task')

function getCompleted(req,res) {

  Task.find({completed:true})
    .then( tasks => {
      res.json(tasks)
    })

}

module.exports = getCompleted

//curl GET localhost:3000/tasks/completed