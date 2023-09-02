var express = require('express')
var router = express.Router()
// Require the controller that exports skill CRUD functions
var skillsCtrl = require('../controllers/skills')
//All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)
module.exports = router
// GET /skills/new <- Define BEFORE show route
router.get('/new', skillsCtrl.new)

//GET /skills/id (show)
router.get('/:id', skillsCtrl.show)
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit)
// POST /skills
router.post('/', skillsCtrl.create)
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete)
// PUT /skills/:id
router.put('/:id', skillsCtrl.update)
module.exports = router
