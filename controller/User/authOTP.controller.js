const User = require("../../models/User");

const authOTP=async(req,res)=>{
    try {
        const {email,otp}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.status(405).json({success:false,message:"User does not exist"})
        }else{
            if(user.otp==otp){
                return res.status(200).json({success:true,message:"OTP authenticated"})
            }else{
                return res.status(404).json({success:false,message:"Wrong OTP entered"})
            }
        }
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=authOTP