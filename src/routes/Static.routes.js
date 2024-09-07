const express = require ("express")
const staticController = require('../controllers/static.controller.js')
const router = express.Router()


router.route('/').get(staticController)
router.route('/signup').get((req , res)=>{ return res.render("Signup")})
router.route('/login').get((req , res)=>{ return res.render("login")})
module.exports = router