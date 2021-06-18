
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true,minlength:5,
    },password:{
        type:String,required:true,
    },phone:{
        type:String,required:true,
    },image:{
        type:String,required:true
    },
    verifyCode:{
        type:String,required:true
    },
    creator:{
        type:Boolean,required:true,default:false

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
const user=new mongoose.model("user",userSchema);

module.exports=user;