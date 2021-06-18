const mongoose=require('mongoose');
const videodataSchema=new mongoose.Schema({
    userId:{
        type:String,required:true,
    },videolink:{
        type:String,required:true,
    },description:{
        type:String,required:true,
    }
    , track:{
        type:String,required:true,default:'orignal music by '
    }
    , likes:{
        type:String,required:true,default:[]
    },shares:{
        type:String,required:true,default:[]
    }
    ,comments:{
        type:String,required:true,default:[]

    }
},{
    timestamps:true
});

const videodata=new mongoose.model("videoData",videodataSchema);

module.exports=videodata;