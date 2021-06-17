
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const exerciseSchema=new mongoose.Schema({
    userId:{
        type:String,required:true,
    },videolink:{
        type:String,required:true,
    },description:{
        type:String,required:true,
    }
    , track:{
        type:String,required:true,
    }
    , creator:{
        type:Boolean,required:true,

    }, likes:{
        type:String,required:true,
    },shares:{
        type:String,required:true,
    }
    ,comments:{
        type:String,required:true,

    }
},{
    timestamps:true
});

const exercise=new mongoose.model("triel",exerciseSchema);

module.exports=exercise;