const User = require("../../models/User");
const sendMail = require("../../utils/mailer.utils");

const requestOTP=async(req,res)=>{
    try {
        const otp=Math.floor(100000 + Math.random() * 900000);
        const{email}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.status(405).json({success:false,message:"User does not exist"})
        }else{
            await User.findOneAndUpdate({email},{otp:parseInt(otp)})
            sendMail(email,otp,res)
        }
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }    
}

module.exports=requestOTP