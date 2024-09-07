const UserSession  = new Map();

const setSession = (id , user)=>{
   UserSession.set(id , user)
}


const getSession = (id )=>{
    return UserSession.get(id)
 }


 module.exports = {
    setSession,
    getSession
 }