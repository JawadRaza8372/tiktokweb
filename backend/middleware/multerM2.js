const multer=require('multer');
const path =require("path")
    const imageStorage = multer.diskStorage({
        destination: './documents', 
          filename: (req, file, cb) => {
              cb(null, Date.now()+file.originalname)
     
        }
    });
    module.exports = multer({
        storage: imageStorage,
        limits: {
          fileSize: 5000000 
        },
        fileFilter(req, file, cb) {
          let ext=path.extname(Date.now()+`${file.orignalname}`);
          if (ext === "pdf" || ext === "docs" || ext === "docx" ){
          cb(null,true)
          }
          else{
          cb(null,"file format is not supported",false);
          return;
          }
      }
    }) 
