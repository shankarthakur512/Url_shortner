const express = require('express');
const path = require('path')
const {ConnectDB} = require('./src/Database/index.js')
var cookieParser = require('cookie-parser')
const Authentication = require('./src/Moddleware/auth.js')
const URL = require('./src/models/Url.model.js')
const app = express();

//constants 
const PORT = 8000
const DB_URL = 'mongodb://root:example@localhost:27017/short-url';


//Database connection

ConnectDB(DB_URL).then(()=>{console.log("MongoDB connected!!!")})

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cookieParser())
app.set('view engine' ,"ejs")
app.set("views" , path.resolve("./Views"))

//routes
const UrlRouter = require('./src/routes/Url.routes.js');
const staticRouter = require('./src/routes/Static.routes.js')
const UserRouter = require('./src/routes/User.routes.js');

app.use('/url' ,Authentication, UrlRouter)
app.use('/',staticRouter)
app.use('/user', UserRouter)


app.get('/url/:shortID' ,async (req , res)=>{

  const { shortID } = req.params;
 
  const {redirectURL} = await URL.findOneAndUpdate({shortID} , {
    $push : {
        visitHistory : [{timestamp : Date.now()}]
    }
  });

if(!redirectURL) res.send("No Url found")

  res.status(200).redirect(redirectURL)


})


app.listen(PORT , ()=>{
    console.log(`server is running at http://localhost:${8000}`)
})