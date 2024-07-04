const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const CartSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    newspaper:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'newspaper'
    }
},{timestamps:true})

const Cart=mongoose.model('cart',CartSchema)
module.exports=Cart