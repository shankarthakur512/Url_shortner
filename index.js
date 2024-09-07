const express = require('express');
const {ConnectDB} = require('./src/Database/index.js')
const URL = require('./src/models/Url.model.js')
const app = express();

//constants 
const PORT = 8000
const DB_URL = 'mongodb://root:example@localhost:27017/short-url';


//Database connection

ConnectDB(DB_URL).then(()=>{console.log("MongoDB connected!!!")})

app.use(express.urlencoded({extended : true}))
app.use(express.json())

//routes
const UrlRouter = require('./src/routes/Url.routes.js');
const { findOneAndUpdate } = require('./src/models/Url.model.js');
app.use('/url' , UrlRouter)


app.get('/:shortID' ,async (req , res)=>{

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