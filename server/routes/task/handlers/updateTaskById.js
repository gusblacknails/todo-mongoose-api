const Task = require('../../../models/Task')

function updateTaskById (req,res) {

  const { id } = req.params
  const { task, completed } = req.body

  const updateData = {}
  if (task) updateData.task = task
  if (completed) updateData.completed = completed
  
  Task.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = updateTaskById

//curl -X PUT --data "completed=true" localhost:3000/task/5925935c8915490bb0d5092a