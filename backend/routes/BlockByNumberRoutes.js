const Router=require("express").Router();
const BlockByNumberModel=require("../models/BlockByNumberModel");
const multerM=require("../middleware/mutlerM");
const multerMWare2=require("../middleware/multerM2");
const multer=require("multer");
const path =require("path");
Router.route("/user/").get((req,res,next)=>{
    BlockByNumberModel.find({approval:true}).then(data=>res.json(data)).catch(e=>res.status(400).json("Error: "+e))
});

Router.route("/admin/").get((req,res,next)=>{
    BlockByNumberModel.find({approval:false}).then(data=>res.json(data)).catch(e=>res.status(400).json("Error: "+e))
});


var uploadMultiple = multerM.fields([{ name: 'image', maxCount: 1 }, { name: 'doc', maxCount: 1 }])
var uploadMultiples = multerM.fields([{ name: 'image', maxCount: 1 }, { name: 'doc', maxCount: 1 },{name:'submiter',maxCount:1}])
Router.post("/user/add",uploadMultiple,(req,res,next)=>{
if (req.files){
    const type=`By Phone Number`;
    const name=req.body.name;
    const phone=req.body.phone;
    const description=req.body.description;
    const imageName=req.files['image'][0].filename;
    const documentName=req.files['doc'][0].filename;
    const approval=true;
        const newExercise=new BlockByNumberModel({type,name,phone,description,imageName,documentName,approval});
    newExercise.save().then((data)=>res.json("Data added")).catch(e=>res.status(400).json("Error: "+e))
   
}
else{
    res.send({status:false,message:"server error"})
}
 
})


Router.post("/guest/add",uploadMultiples,(req,res,next)=>{
    if (req.files){
        const type='By Phone Number';
        const name=req.body.name;
        const phone=req.body.phone;
        const description=req.body.description;
        const imageName=req.files['image'][0].filename;
        const documentName=req.files['doc'][0].filename;
        const submitterName=req.body.submitterName;
        const submitterPhone=req.body.submitterPhone;
        const submitterImageName=req.files['submiter'][0].filename;
        const approval=false;
            const newExercise=new BlockByNumberModel({type,name,phone,description,imageName,documentName,approval,submitterImageName,submitterName,submitterPhone});
        newExercise.save().then((data)=>res.json("Data added")).catch(e=>res.status(400).json("Error: "+e))
       
    }
    else{
        res.send({status:false,message:"server error"})
    }
     
    })

Router.route("/user/update/:id").post((req,res,next)=>{
    const id=req.params.id;
    BlockByNumberModel.findById(id).then((data)=> {
        data.type;
        data.name=req.body.name;
        data.phone=req.body.phone;
        data.description=req.body.description;
        data.imageName;
        data.documentName;
        data.submitterName;
        data.submitterPhone;
        data.submitterImageName;
        data.approval;
data.save().then(()=>res.json("Data Updated")).catch(e=>res.status(400).json("Error: "+e))
        
    }
    ).catch(e=>res.send({status:true,message:"could not find"}))

})
Router.route("/admin/update/status/:id").post((req,res,next)=>{
    const id=req.params.id;
    BlockByNumberModel.findById(id).then((data)=> {
        data.type;
        data.name;
        data.phone;
        data.description;
        data.imageName;
        data.documentName;
        data.submitterName;
        data.submitterPhone;
        data.submitterImageName;
        data.approval=true;
data.save().then(()=>res.json("Data Updated")).catch(e=>res.status(400).json("Error: "+e))
        
    }
    ).catch(e=>res.send({status:true,message:"could not find"}))

})


Router.route("/user/delete/:id").delete((req,res,next)=>{
    BlockByNumberModel.findByIdAndDelete(req.params.id).then((data)=>res.json("deleted")).catch(e=>res.status(400).json("Error: "+e))
})

Router.route("/find/:phone").get((req,res,next)=>{
    const phone=req.params.phone
    BlockByNumberModel.find({phone:phone}).then((data)=>res.send(data)).catch(e=>res.status(400).json("Error: "+e))
})
module.exports=Router;