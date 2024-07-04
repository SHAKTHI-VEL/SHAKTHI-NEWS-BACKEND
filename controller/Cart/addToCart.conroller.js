const Cart = require("../../models/Cart");
const Newspaper = require("../../models/Newspaper");

const addToCart=async(req,res)=>{
    try {
        const {paperId}=req.body;
        const exist=await Newspaper.findById(paperId);
        if(!exist){
            return res.status(400).json({success:false,message:"Newspaper does not exist"})
        }else{
            const data=await Cart.create({newspaper:exist._id,user:req.user});
            return res.status(200).json({success:true,message:"Added to cart successfully",data})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=addToCart