const User = require("../../models/User");
const bcrypt=require('bcryptjs')

const resetPassword=async(req,res)=>{
    try {
        const{email,password,otp}=req.body;
        const hashpassword=await bcrypt.hash(password,10)
        const user=await User.findOneAndUpdate({email,otp},{password:hashpassword})
        if(user){
            return res.status(200).json({success:true,message:"Password changed successfully"})
        }else{
            return res.status(405).json({suceess:false,message:"Error in changing the password"})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=resetPassword