const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const NewspaperSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
},{timestamps:true})

const Newspaper=mongoose.model('newspaper',NewspaperSchema)
module.exports=Newspaper



