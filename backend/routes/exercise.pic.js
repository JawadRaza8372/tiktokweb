const Router=require("express").Router();
const multer=require("multer");
const exercise=require("../models/exercise.pic.model.js");
const mutlerWare=require("../middleware/mutlerM")
const multerMWare2=require("../middleware/multerM2")
const cloudinaryWare=require("../middleware/cloudinaryWare")

const path =require("path")





Router.post('/add',mutlerWare.single('image'), async (req, res, next)=> {

   if (req.file){
       console.log("file found")
    try {
        const result=await cloudinaryWare.uploader.upload(req.file.path);
        const image=result.secure_url;
        const name="jawadd"
        const newExercise=new  exercise({name,image});
        await newExercise.save().then(()=>{
            res.status(201).json("Data added")
        }).catch(e=>res.json(e));

            
    } catch (error) {
        res.status(409).json(error);
    }
    }
    else{
        res.status(409).json("media not found");

    }
    next()
        
});

module.exports=Router;