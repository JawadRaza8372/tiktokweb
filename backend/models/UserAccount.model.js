
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true,minlength:5,
    },
    username:{
        type:String,required:true,minlength:5,unique:[true,"username is not available"]
    },password:{
        type:String,required:true,
    },phone:{
        type:String,required:true,unique:[true,"phone number is pre-registered"]
    },image:{
        type:String,required:true
    },
    verifyCode:{
        type:String,required:true
    },
    creator:{
        type:Boolean,required:true,default:false

    }
    ,
    verification:{
        type:Boolean,default:false,required:true

    },isLogin:{
        type:Boolean,default:false,required:true

    },followers:{
        type:Array,default:[],required:true

    },following:{
        type:Array,default:[],required:true

    }

},{
    timestamps:true
});
userSchema.methods.generateHash=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}
userSchema.methods.vaiidpassword=function(password){
    return bcrypt.compareSync(password,this.password)
}
const user=new mongoose.model("userAccounts",userSchema);

module.exports=user;