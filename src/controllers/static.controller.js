const URL = require ('../models/Url.model.js')

const staticController =  async (req , res)=>{

    const allUrls = await URL.find({})
    console.log(allUrls[0].shortID)
    return res.render("home" ,{Urls : allUrls})
}

module.exports = staticController