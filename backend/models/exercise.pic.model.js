
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const exerciseSchema=new mongoose.Schema({
    name:{
        type:String,required:true,
    },image:{
        type:String,required:true,
    }
},{
    timestamps:true
});

const exercise=new mongoose.model("triel",exerciseSchema);

module.exports=exercise;