const createDetails = require('../controller/detailsController')

const router = require("express").Router()


router.post('/create-details', createDetails);
module.exports = router;