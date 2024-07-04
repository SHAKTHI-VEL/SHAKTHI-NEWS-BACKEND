const express=require('express')
const addSubscription = require('../controller/Subscription/addSubscription.controller')
const fetchuser = require('../middleware/fetchUser')
const getSubscription = require('../controller/Subscription/getSubscription.controller')
const router=express.Router()

router.post('/',fetchuser,addSubscription)
router.get('/',fetchuser,getSubscription)

module.exports=router