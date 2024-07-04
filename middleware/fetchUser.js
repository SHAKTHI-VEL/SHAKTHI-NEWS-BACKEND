var jwt=require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET=process.env.JWT_SECRET;

const fetchuser=(req,res,next)=>{
const token=req.header('auth-token');
if(!token){
    res.status(400).send({error:"Please authenticate using a valid token"})
}
try{
    const data=jwt.verify(token,JWT_SECRET);
    // console.log(data);
    req.user=data.id;
    next();
}catch(error){
    res.status(400).send({error:"Please authenticate using a valid token"})
}
}
module.exports=fetchuser;