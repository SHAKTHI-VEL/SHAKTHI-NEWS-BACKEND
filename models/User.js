const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.JWT_SECRET

const userSchema=new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number
    },
    address:{
        type:String
    }
},{timestamps:true})


userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10)
        next()
    }
    else
        return next
})


userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken=function(){
    return jwt.sign({
        id:this._id
    },secret)
}


const User=mongoose.model('user',userSchema)
module.exports=User