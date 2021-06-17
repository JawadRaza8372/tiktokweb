const mongoose=require('mongoose');
const blocknumberSchema=new mongoose.Schema({
    type:{
        type:String,required:true
    },name:{
        type:String,required:true
    },phone:{
        type:String,required:true
    },description:{
        type:String,required:true
    },imageName:{
        type:String,required:true
        
    }, documentName:{
        type:String,required:true
        
    },submitterName:{
        type:String,default:""
    },submitterPhone:{
        type:String,default:""
    },submitterImageName:{
        type:String,default:""
    },
    approval:{
        type:Boolean,default:false
    }
},{
    timestamps:true
});
const BlockByNumberModel=new mongoose.model("blocknumberSchema",blocknumberSchema);
module.exports=BlockByNumberModel;