const Newspaper=require('../../models/Newspaper')

const createNewspaper=async(req,res)=>{
    try {
        const {data}=req.body;
        const result=await Newspaper.insertMany(data);
        return res.status(200).json({success:true,message:"Successfully inserted the data",result})
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
        
    }
}

module.exports=createNewspaper