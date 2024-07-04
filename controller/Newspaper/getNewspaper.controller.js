const Newspaper = require("../../models/Newspaper");
const { redisClient } = require("../../redis")

const getNewspaper=async(req,res)=>{
    try {
        let results;
         results=await redisClient.get("newspaper");
        if(results){
            results=JSON.parse(results);
        }else{
            results=await Newspaper.find({});
            await redisClient.set("newspaper",JSON.stringify(results),{EX: 180,NX: true,})
        }
        res.status(200).json({success:true,message:"Fetched successfully",data:results})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=getNewspaper