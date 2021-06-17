const Router=require("express").Router();
const multer=require("multer");
const exercise=require("../models/exercise.pic.model.js");
const mutlerWare=require("../middleware/mutlerM")
const multerMWare2=require("../middleware/multerM2")
const cloudinaryWare=require("../middleware/cloudinaryWare")

const path =require("path")





Router.post('/add',mutlerWare.single('video'), async (req, res, next)=> {
   if (req.file){
       console.log("file found")
       const dat=Date.now();
        const result= await cloudinaryWare.uploader.upload_large(req.file.path,{ resource_type: "video", 
        public_id: `myfolder/mysubfolder/${req.file.originalname+dat}`,
        chunk_size: 66000000},
      function(error, result) {
        res.status(200).json(result.secure_url);
        next()
    } )
    }
    else{
        res.status(409).json("media not found");
        next()

    }
        
});

module.exports=Router;