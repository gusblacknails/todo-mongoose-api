const Task = require('../../../models/Task')

function addTask(req,res) {
	console.log(req.body)
  const { task } = req.body

  const newTask = new Task({ task })

  newTask.save()
    .then( msg => {
      res.redirect('/tasks')


    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = addTask

//curl -X POST --data "task=buy Rai's food" localhost:3001/tasks