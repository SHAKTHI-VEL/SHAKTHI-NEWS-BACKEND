const express=require('express')
const addToCart = require('../controller/Cart/addToCart.conroller')
const fetchuser = require('../middleware/fetchUser')
const getCart = require('../controller/Cart/getCart.controller')
const removeCart = require('../controller/Cart/removeCart.controller')
const router=express.Router()

router.post('/',fetchuser,addToCart)
router.get('/',fetchuser,getCart)
router.delete('/',fetchuser,removeCart)

module.exports=router