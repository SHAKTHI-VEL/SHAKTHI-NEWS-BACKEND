const redis=require('redis')
require('dotenv').config()
const redisurl=process.env.REDIS_URL
let redisClient=redis.createClient(redisurl);

const redisConnection=async()=>{
    try {
        redisClient.on("error",(error)=>console.log(error));
        await redisClient.connect()
        console.log('Redis connected')
    } catch (error) {
        throw error;
    }
}

module.exports={redisConnection,redisClient}