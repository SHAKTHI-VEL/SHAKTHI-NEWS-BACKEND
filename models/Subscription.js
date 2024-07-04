const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const SubscriptionSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    newspaper:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'newspaper'
    },
    startDate:{
        type: Date,
		default: Date.now
    }
},{timestamps:true})

const Subscription=mongoose.model('subscription',SubscriptionSchema)
module.exports=Subscription