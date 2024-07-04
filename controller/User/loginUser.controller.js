const User = require("../../models/User");

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(405).json({success:false,message:"User does not exist"})
        }else{
            const isMatch=await user.isPasswordCorrect(password)
            if(isMatch==true){
                const token=user.generateToken()
                return res.status(200).json({success:true,message:"Login successfull",token})
            }else{
                return res.status(404).json({success:false,message:"Incorrect password"}); 
            }
        }
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=loginUser