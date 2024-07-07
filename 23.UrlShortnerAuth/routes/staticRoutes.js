const express = require('express');
const urlModel = require("../models/urlModel")
const router = express.Router();

router.get('/' , async(req, res)=>{
    const allUrls = await urlModel.find({})
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