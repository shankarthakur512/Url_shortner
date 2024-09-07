const express = require ("express")
const {HandleGenerateNewshortUrl , HandleAnalyticsData} = require("../controllers/Url.controller.js")

const router = express.Router()

router.route('/').post(HandleGenerateNewshortUrl)
router.route('/analytics/:shortID').get(HandleAnalyticsData)
module.exports = router