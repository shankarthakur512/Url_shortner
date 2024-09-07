
const {getSession} = require('../Services/auth.js')

const Authentication = (req , res , next)=>{
   const uid = req.cookies.uid

   if(!uid) return res.redirect('/login')
   const user = getSession(uid);
    
   if(!user) return res.redirect('/login')
    
req.user = user;
next()
}

module.exports = Authentication