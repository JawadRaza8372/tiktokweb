const Router=require("express").Router();
const SignUp=require("../models/UserAccount.model");
const bcrypt=require('bcrypt');
const vonage=require('../middleware/vonage')
    Router.post("/verify",(req,res,next)=>{

    const phone=req.body.phone;
    const verifyCode=req.body.verifyCode;
    let verification=true;
    SignUp.findOneAndUpdate({phone,verifyCode},verification).then(data=>res.json({success:true,message:"Account Verified.Please Login Your Account",responce:data}))
    .catch(e=>res.json({success:false,message:"Wrong Verification Code",responce:e}))
});


const sendMessage=async (to,textdata)=>{
    
    vonage.message.sendSms('TikTokWeb', to, textdata, callback=(err,responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error`);
            }
        }
    })
  }
 

    Router.patch("/findLogin",(req,res,next)=>{
const phone=req.body.phone;
const password=req.body.password;
    SignUp.findOneAndUpdate({phone,password},{isLogin:true}).then(data=>{res.json({success:true,message:"data fatched",responce:data})
    console.log(data)}
    )
    .catch(e=>res.json({success:false,message:"Not Fatched",responce:e}))
});

Router.patch("/checkLoginStatus/:id",(req,res,next)=>{
    const id=req.params.id;
        SignUp.findById(id).then(data=>{res.json({success:true,message:"data fatched",responce:data})
        console.log(data)}
        )
        .catch(e=>res.json({success:false,message:"Not Fatched",responce:e}))
    });
    Router.patch("/logoutUser/:id",(req,res,next)=>{
        const id=req.params.id;
            SignUp.findByIdAndUpdate(id,{isLogin:false}).then(data=>{res.json({success:true,message:"data fatched",responce:data})
            console.log(data)}
            )
            .catch(e=>res.json({success:false,message:"Not Fatched",responce:e}))
        });

Router.post("/register",(req,res,next)=>{
        const name=req.body.name;
        const username=req.body.username;
        const creator=false;
        const password=req.body.password;
        const confirm=req.body.confirm;
        const phone=req.body.phone;
        const verification=false;
        const isLogin=false;
        const followers=[];
        const following=[];
        const image="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";
        const verifyCode = Math.random().toString(36).substring(5)
        if (confirm === password){
            const newExercise=new SignUp({name,username,creator,password,phone,image,verifyCode,verification,isLogin,following,followers});
            newExercise.save().then((data)=>{
                const text=`Your Verification code for TikTokWeb Account is ${verifyCode}.Enter Code to Verify your Account`;
                 sendMessage(data.phone,text).then(()=>res.send({success:true,message:"SignUp Successfull Verify the Account plz"})).catch(err=>{
                    console.log(err) 
                    res.send({success:false,message:"Error:server error internal.",responce:err})}
    )})
    .catch(e=>{res.send(e)})
   
        }
        else{
            res.json({status:false,message:"please enter the same passwords"})
        }
     
       

        });
    
 

        Router.route("/updateProfilePhoto").post((req,res,next)=>{
            const image=req.body.image;
            const id=req.body.id;
    SignUp.findByIdAndUpdate(id,image).then((data)=> {
        res.json({success:true,message:"Profile Picture updated",responce:data})
         
        }).catch(e=>res.json({success:false,message:"Profile Picture not updated",responce:e}))
                
            }
            )

    Router.post("/ForgotPassword",(req,res,next)=>{

    const phone=req.body.phone;
    const verifyCode = Math.random().toString(36).substring(5);
    SignUp.findOneAndUpdate(phone,verifyCode).then((data)=> {
          sendMessage(data.phone,`Your Verification code for TikTokWeb Account is ${verifyCode}.Enter Code to Reset Your Password`).then(()=>{
            console.log('done')
            next()
        }).catch(e=>res.json({success:false,message:"message sending Error",responce:e}))
 
}).catch(e=>{res.json({success:false,message:"Error",responce:e});

console.log(e)})
        
    }
    )


Router.route("/ResetPassword").post((req,res,next)=>{
            const phone=req.body.phone;
            const confirm=req.body.confirm;
            const verifyCode=req.body.verifyCode;
            const password=req.body.password;
            if (`${password}` === `${confirm}` &&  `${confirm}` ===`${password}`){
                SignUp.findOneAndUpdate({phone,verifyCode},{password}).then((data)=>{
                    res.json({success:true,message:"Password Reset SuccessFully",responce:data});
              }
                  
                  ).catch(e=> res.json({success:true,message:"Password Reset Error",responce:e}))
            }
            else{
                res.json({status:false,message:"Type Same Password please",responce:null})
            }
        
        
                    
                        
     
               
               });
                  





module.exports=Router;