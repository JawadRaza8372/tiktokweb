const Router=require("express").Router();
const SignUp=require("../models/user.model");
const userSessionModel=require("../models/userSessionModal");

const bcrypt=require('bcrypt');



Router.route("/logout").get((req,res,next)=>{
userId=req.body.userId;
    userSessionModel.findOneAndModify({userId},{isDeleted:true}).then(data=>
      res.send({status:true,message:"logout"})).catch(e=>res.send("Error"+e))
});

module.exports=Router;