const express = require('express');
const {generateNewShortUrl, getAnalytics, giveRedirectUrl} = require('../contollers/urlController')

const router = express.Router();

router.post('/', generateNewShortUrl)

router.get('/:shortId', giveRedirectUrl)

router.get('/analytics/:shortId', getAnalytics)

module.exports = router;