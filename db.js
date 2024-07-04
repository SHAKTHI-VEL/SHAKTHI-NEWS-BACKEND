const mongoose=require('mongoose')
require('dotenv').config()
const dburl=process.env.DB_URL

const MongoConnection=async()=>{
    try {
        await mongoose.connect(dburl);
        console.log('DB connected successfully');
    } catch (error) {
        console.log('Error connecting database');
        process.exit(1);
    }
}

module.exports=MongoConnection