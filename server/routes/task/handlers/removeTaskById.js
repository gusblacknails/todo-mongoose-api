const Task = require('../../../models/Task')

function removeTaskById (req,res) {

  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = removeTaskById

//curl -X DELETE localhost:3000/task/59257fd671aca6086f3c890a