const Router=require("express").Router();
const mutlerWare=require("../middleware/mutlerM")
const mutlerWare2=require("../middleware/multerM2")
const cloudinaryWare=require("../middleware/cloudinaryWare")

const path =require("path")
Router.post('/addphoto',mutlerWare2.single('image'), async (req, res, next)=> {
    try{
        if (req.file){
            console.log("file found")
             const result= await cloudinaryWare.uploader.upload(req.file.path);
             res.status(200).json(result.secure_url);
             next()
         }
         else{
             res.status(409).json("media not found");
             next()
     
         }
    }catch(err){
        res.status(409).json({error:err});
    }
    
    
         
 });




Router.post('/addvideo',mutlerWare.single('video'), async (req, res, next)=> {
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