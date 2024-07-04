const express=require('express');
const MongoConnection = require('./db');
const { serve,setup } = require('./utils/swagger.utils');
const userRoute=require('./routes/user.route');
const newspaperRoute=require('./routes/newspaper.route');
const cartRoute=require('./routes/cart.route')
const subscriptionRoute=require('./routes/subscription.route')
const {redisConnection} = require('./redis');
const fetchuser = require('./middleware/fetchUser');
const app=express();
require('dotenv').config()
const port=process.env.PORT;

MongoConnection()
redisConnection()

app.use(express.json())

app.use('/api-docs',serve,setup)

app.use('/user',userRoute)
app.use('/newspaper',newspaperRoute)
app.use('/cart',cartRoute)
app.use('/subscription',subscriptionRoute)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
console.log(`Server running on port ${port}`);
})