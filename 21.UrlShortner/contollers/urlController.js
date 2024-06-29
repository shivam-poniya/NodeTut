const UrlModel = require('../models/urlModel')
const shortId = require('shortid')

const generateNewShortUrl = async (req, res) => {
    const body = req.body;

    if(!body.url) return res.status(400).json("URL is required");

    const shortUrl = shortId.generate();

    await UrlModel.create({
        shortId : shortUrl,
        redirectURL : body.url,
        visitHistory:[]
    });

    return res.json({id : shortUrl});
}

const giveRedirectUrl = async(req, res) => {
    const shortId = req.params.shortId;
    const result = await UrlModel.findOneAndUpdate( {
        shortId : shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      })
    return res.redirect(result.redirectURL)
}

 const getAnalytics = async (req , res) => {
    const shortId = req.params.shortId;
    const result = await UrlModel.findOne({ shortId : shortId })
    return res.json({ 
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    generateNewShortUrl,
    giveRedirectUrl,
    getAnalytics
}