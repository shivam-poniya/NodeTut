const express = require('express');
const urlModel = require("../models/urlModel")
const router = express.Router();

router.get('/' , async(req, res)=>{
    if(!req.user) return res.redirect('/login')
    const allUrls = await urlModel.find({ createdBy : req.user._id});
    return res.render("index",{
        urls: allUrls,
    })
})

router.get('/signup', async(req,res)=>{
    return res.render("signup")
})

router.get('/login', async(req,res)=>{
    return res.render("login")
})

module.exports = router;