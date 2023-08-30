var express = require('express')
var router = express.Router()
// Require the controller that exports skill CRUD functions
var skillsCtrl = require('../controllers/skills')
//All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)
module.exports = router

//GET /skills/id (show)
router.get('/:id', skillsCtrl.show)
module.exports = router
