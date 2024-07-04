const Cart = require("../../models/Cart")
const mongoose=require('mongoose')

const getCart=async(req,res)=>{
    try {
        const data=await Cart.aggregate([
            {
                $match: {
                  "user":new mongoose.Types.ObjectId(req.user)
                }
              },
              {
                $lookup: {
                  "from": "newspapers",
                  "localField": "newspaper",
                  "foreignField": "_id",
                  "as": "result"
                }
              },
              {
                $addFields: {
                  newspaper_details:{
                    $first:"$result"
                  }
                }
              },
              {
                $project: {
                  "result":0
                }
              }
        ])
        return res.status(200).json({success:true,message:"Fetched successfully",data})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=getCart