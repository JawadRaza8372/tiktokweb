const mongoose=require('mongoose');

const userSessionSchema=new mongoose.Schema({
    userId:{
        type:String,default:''
    },
    isLogin:{
        type:Boolean,default:false
    }
},{
    timestamps:true
});

const userSessionModal=new mongoose.model("userSessionSchema",userSessionSchema);

module.exports=userSessionModal;

