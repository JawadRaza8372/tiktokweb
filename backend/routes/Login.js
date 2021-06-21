const Router=require("express").Router();
const userSessionModel=require("../models/userSession.Modal");


Router.route("/createSession").post((req,res,next)=>{
  let userId=req.body.userId;
  let isLogin=false;
  const newsession=new userSessionModel({userId,isLogin});
  newsession.save().then((data)=>{
            res.send({status:true,message:"sessionCreated",responce:data})
   }).catch(e=>res.send("Error"+e))
  });

  Router.route("/sessionStatus").post((req,res,next)=>{
   let userId=req.body.userId;
        userSessionModel.find({userId}).then(data=>
          res.send({status:true,message:"data fetched",responce:data})).catch(e=>res.send("Error"+e))
    });
    Router.route("/loginSession").post((req,res,next)=>{
      let userId=req.body.userId;
      SignUp.findOneAndUpdate({userId},{isLogin:true}).then((data)=>{
        res.send({success:true,message:"User loged in",responce:data});
  }
      
      ).catch(e=> res.send({success:false,message:"Error:Server Error "}))})

Router.route("/logout").get((req,res,next)=>{
userId=req.body.userId;
    userSessionModel.findOneAndUpdate({userId},{isLogin:false}).then(data=>
      res.send({status:true,message:"logout",responce:data})).catch(e=>res.send("Error"+e))
});

module.exports=Router;