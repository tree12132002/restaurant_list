// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
// 準備引入路由模組
router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/search', search)
// 匯出路由器
module.exports = router