const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/hostelregistration")
.then(()=>{
    console.log("mongo connected")
})
.catch((err)=>{
    console.log(err)
})
const registrationSchema=new mongoose.Schema({
    hno:{
        type:Number,
        requried:true
    },
    rank:{
        type:Number,
        requried:true
    },
    sname:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    spno:{
        type:String,
        required:true
    },
    aano:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    hostel:{
        type:String,
        required:true
    },
    roomno:{
        type:Number,
        required:true
    },
    bed:{
        type:Number,
        required:true
    },
    fathname:{
        type:String,
        required:true
    },
    fphno:{
        type:Number,
        required:true
    }

})
const collection=new mongoose.model("Collection1",registrationSchema)
module.exports=collection