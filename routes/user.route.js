const express=require('express')
const loginUser = require('../controller/User/loginUser.controller')
const createUser = require('../controller/User/createUser.controller')
const requestOTP = require('../controller/User/requestOTP.controller')
const authOTP = require('../controller/User/authOTP.controller')
const resetPassword = require('../controller/User/resetPassword.controller')
const router=express.Router()

router.post('/login',loginUser)
router.post('/signup',createUser)
router.post('/requestotp',requestOTP)
router.post('/authotp',authOTP)
router.put('/reset',resetPassword)

module.exports=router