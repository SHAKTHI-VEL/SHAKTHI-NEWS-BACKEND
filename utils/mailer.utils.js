const nodemailer = require('nodemailer');
require('dotenv').config()

const sendMail=(email,otp,res)=>{
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email_id,
            pass: process.env.email_password
        }
    });
    
    let mailDetails = {
        from: process.env.email_id,
        to: email,
        subject: 'OTP to change password',
        html:`<h1>Hi,</h1>
        <h1>You have requested an OTP to change your password.YOur otp is ${otp}</h1>
        `
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
           return res.status(501).json({sucess:'false'})
        } else {
           return res.status(200).json({sucess:'true',message:'Email sent successfully'})   
        }
    });
}

module.exports=sendMail