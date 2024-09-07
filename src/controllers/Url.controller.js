const {nanoid} = require("nanoid")
const URL = require ('../models/Url.model.js')



const HandleGenerateNewshortUrl = async (req , res) =>{

const body = req.body;

if(!body.url) return res.status(400).json({error : 'Url is required'})

    const shortID = nanoid(8);

    await URL.create({
        shortID,
        redirectURL : body.url,
        visitHistory : [],
    })
    return res.render("home" ,{shortID : shortID })
  return res.json({id : shortID})
}


const HandleAnalyticsData = async(req , res) =>{

 const {shortID} = req.params

 const { visitHistory } = await URL.findOne({shortID});
  
 return res.json({
    totalClicks : visitHistory.length,
    analytics : visitHistory
 })


}

module .exports = {
     HandleGenerateNewshortUrl,
     HandleAnalyticsData
}