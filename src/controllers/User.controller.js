const User = require('../models/User.model.js')
const {setSession} = require('../Services/auth.js')
const { v4: uuidv4 } = require('uuid');



const RegisterUser = async (req ,res) =>{
    const {name , email , password} = req.body;
 const user =   await User.create({
        name,
        email,
        password
    })
   
    res.redirect("/")
}
const LoginUser = async(req ,res) =>{
    const { email , password} = req.body;
 const user =   await User.findOne({email , password})
  
    if(!user) return res.render('login' , {
        error : "Inavalid email or Passwords"
        })
        const uid = uuidv4();
        setSession(uid ,user._id )
        res.cookie("uid",uid)
    res.redirect('/')
}


module.exports = {
    RegisterUser,LoginUser
}