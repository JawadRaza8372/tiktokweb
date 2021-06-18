const Router=require("express").Router();
const VideoData=require("../models/VideoSchema.Modal");

Router.route("/getvideoData").get((req,res,next)=>{
    VideoData.find().then(data=>res.send({success:true,message:"data fatched",responce:data}))
    .catch(e=>res.status(400).send({success:false,message:"Not Fatched"}))
});

Router.post("/videoDataUpload",(req,res,next)=>{
        const userId=req.body.userId;
        const description=req.body.description;
        const videolink=req.body.videolink;
        const likes=[];
        const shares=[];
        const comments=[];
        try{
            const newExercise=new VideoData({userId,videolink,description,track,likes,shares,comments});
            newExercise.save().then((data)=>{
res.status(200).json({status:true,message:"uploaded",responce:data})
    })
    .catch(e=>{res.send({status:false,message:"not uploaded",responce:e})})
        }catch(err){res.send({status:false,message:"not uploaded",responce:err})}
        
     
       


        });
    
        Router.post("/videoDataUpdate",(req,res,next)=>{
            const id=req.body.id;
            const description=req.body.description;
            try{
                const newExercise=new VideoData({userId,videolink,description,track,likes,shares,comments});
                VideoData.findByIdAndUpdate(id,description).then((data)=> {
                    res.status(200).json({status:true,message:"uploaded",responce:data})
        })
        .catch(e=>{res.send({status:false,message:"not uploaded",responce:e})})
            }catch(err){res.send({status:false,message:"not uploaded",responce:err})}
            
         
           
    
    
            });
        



    Router.route("/delateVideoData").post((req,res,next)=>{
        const id=req.body.videoId;
        const verifyCode = Math.random().toString(36).substring(5);
        VideoData.findByIdAndRemove(id).then((data)=> {
            res.status(200).json({status:true,message:"video deleted",responce:data})
     
    }).catch(e=>res.status(400).json({status:true,message:"video deleting error",responce:e}))
            
        }
        )





module.exports=Router;