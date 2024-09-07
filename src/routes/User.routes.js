const express = require ("express")
const {RegisterUser ,LoginUser} = require('../controllers/User.controller.js')

const router = express.Router()


router.route('/').post(RegisterUser);

router.route('/login').post(LoginUser);
module.exports = router