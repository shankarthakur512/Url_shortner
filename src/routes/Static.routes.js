const express = require ("express")
const staticController = require('../controllers/static.controller.js')
const router = express.Router()


router.route('/').get(staticController)

module.exports = router