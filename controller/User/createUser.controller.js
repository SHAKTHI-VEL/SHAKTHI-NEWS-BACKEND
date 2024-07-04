const User = require("../../models/User");

const createUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const existingUser=await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({success:false,message:"Sorry a user with this email exist"})
        }else{
            if(!(email) || !(password)){
                return res.status(400).json({success:false,message:"Enter appropriate email or password"});
            }
            const user=await User.create({email,password})
            const token=user.generateToken()
            return res.status(200).json({success:true,token,message:"User created successfully"})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports=createUser