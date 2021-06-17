const Router=require("express").Router();
const SignUp=require("../models/user.model");
const multerM=require("../middleware/mutlerM");
const bcrypt=require('bcrypt');
const vonage=require('../middleware/vonage')
Router.route("/verify").get((req,res,next)=>{
    const phone=req.body.phone;
    const verifyCode=req.body.verifyCode;

    SignUp.findOne({phone,verifyCode}).then(data=>res.send({success:true,message:"Account Verified.Please Login Your Account"}))
    .catch(e=>res.status(400).send({success:false,message:"Wrong Verification Code"}))
});


const sendMessage=async(to,text)=>{
    
    vonage.message.sendSms('BlackList', to, text, callback=(err,responseData) => {
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
 

Router.route("/").get((req,res,next)=>{


    SignUp.find().then(data=>res.send({success:true,message:"data fatched",data}))
    .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
});
Router.route("/find/").post((req,res,next)=>{
const phone=req.body.phone;
const password=req.body.password;
    SignUp.find({phone,password}).then(data=>res.send({success:true,message:"data fatched",data}))
    .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
});
Router.route("/find/:id").get((req,res,next)=>{
   const _id=req.params.id;
        SignUp.findById(_id).then(data=>res.send({success:true,message:"data fatched",data}))
        .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
    });
Router.route("/status/").get((req,res,next)=>{
 SignUp.find({status:`pending`}).then(data=>res.send({success:true,message:"data fatched",data}))
    .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
});
Router.route("/status/approve/").get((req,res,next)=>{
    SignUp.find({status:`approved`}).then(data=>res.send({success:true,message:"data fatched",data}))
       .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
   });
   Router.route("/status/reject/").get((req,res,next)=>{
    SignUp.find({status:`rejected`}).then(data=>res.send({success:true,message:"data fatched",data}))
       .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
   });

Router.route("/approved/:id").post((req,res,next)=>{
    const _id=req.params.id;
    SignUp.findByIdAndUpdate({_id},{status:'approved'}).then((data)=> {
res.send("done");
    }
    ).catch(e=>res.send({status:true,message:"could not find"}))

   })
   Router.route("/rejected/:id").post((req,res,next)=>{
    const _id=req.params.id;
    SignUp.findByIdAndUpdate({_id},{status:'rejected'}).then((data)=> {
res.send("done");
    }
    ).catch(e=>res.send({status:true,message:"could not find"}))

   })




   var uploadMultiple = multerM.single('image')

Router.post("/register",uploadMultiple,(req,res,next)=>{
    if (req.file){
        const name=req.body.name;
        const status='pending';
        const role="user";
        const password=req.body.password;
        const confirm=req.body.confirm;
        const phone=req.body.phone;
        const image=req.file.filename;
        const verifyCode = Math.random().toString(36).substring(5)
        if (confirm === password){
            const newExercise=new SignUp({name,status,role,password,phone,image,verifyCode});
            newExercise.save().then(()=>{
                const text=`Your Verification code for BlackList Account is ${verifyCode}.Enter Code to Verify your Account`;
                 sendMessage(phone,text).then(()=>res.send({success:true,message:"SignUp Successfull Verify the Account plz"})).catch(e=>res.send({success:false,message:"Error:server error internal."})
    )})
    .catch(e=>{res.send(e)})
        }
        else{
            res.send({status:false,message:"please enter the same passwords"})
        }
     
       
}
else{
    console.log("error")
}
        });
    
 


  Router.route("/ForgotPassword").post((req,res,next)=>{
    const phone=req.body.phone;
    const verifyCode = Math.random().toString(36).substring(5);
    SignUp.findOneAndUpdate({phone:phone},{verifyCode:verifyCode}).then((data)=> {
          sendMessage(data.phone,`Your Verification code for BlackList Account is ${verifyCode}.Enter Code to Reset Your Password`).then(()=>{
            console.log('done')
        }).catch(e=>console.log(e))
 
}).catch(e=>res.status(400).json("Error: "+e))
        
    }
    )


Router.route("/ResetPassword").post((req,res,next)=>{
            const phone=req.body.phone;
            const confirm=req.body.confirm;
            const verifyCode=req.body.verifyCode;
            const password=req.body.password;
            if (`${password}` === `${confirm}` &&  `${confirm}` ===`${password}`){
                SignUp.findOneAndUpdate({phone,verifyCode},{password}).then((data)=>{
                    res.send({success:true,message:"Password Reset SuccessFully"});
              }
                  
                  ).catch(e=> res.send({success:false,message:"Error:Server Error "}))
            }
            else{
                res.send({status:false,message:"Type Same Password please"})
            }
        
        
                    
                        
     
               
               });
                  





module.exports=Router;