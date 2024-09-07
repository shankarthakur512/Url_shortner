const mongoose = require("mongoose")


const ConnectDB = (DB_URL)=>{
return mongoose.connect(DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin'
})
}

module.exports = {
    ConnectDB
}