const createSkills = require('../controller/skillsController')

const router = require('express').Router()

router.post('/api/create-skills', createSkills);

module.exports = router;