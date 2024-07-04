const Cart = require("../../models/Cart");
const Subscription = require("../../models/Subscription");

const addSubscription=async(req,res)=>{
    try {
        const cart=await Cart.find({user:req.user})
        const result=await Subscription.insertMany(cart);
        const deleteCart=await Cart.deleteMany({user:req.user})
        return res.status(200).json({success:true,message:"Added successfully",result})
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=addSubscription