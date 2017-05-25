const Task = require('../../../models/Task')

function addTask(req,res) {

  const { task } = req.body

  const newTask = new Task({ task })

  newTask.save()
    .then( msg => {
      res.json(msg)
      

    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = addTask

//curl -X POST --data "task=buy Rai's food" localhost:3000/tasks