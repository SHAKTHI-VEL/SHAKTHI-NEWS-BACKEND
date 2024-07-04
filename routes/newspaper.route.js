const express=require('express')
const createNewspaper = require('../controller/Newspaper/createNewspaper.controller')
const getNewspaper = require('../controller/Newspaper/getNewspaper.controller')
const router=express.Router()

router.post('/',createNewspaper)
router.get('/',getNewspaper)

module.exports=router