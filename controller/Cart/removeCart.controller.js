const Cart = require("../../models/Cart");

const removeCart=async(req,res)=>{
    try {
        const {cartId}=req.body;
        const result=await Cart.findOneAndDelete({_id:cartId,user:req.user})
        if(!result){
            return res.status(401).json({success:true,message:"Not allowed"})
        }else{
            return res.status(200).json({success:true,message:"Item deleted successfully",result})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=removeCart