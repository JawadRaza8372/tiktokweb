const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".webm" && ext !== ".flv" && ext !== ".vob" && ext !== ".ogv" && ext !== ".ogg" && ext !== ".gifv" && ext !== ".mov" && ext !== ".mp4" && ext !== ".m4p" && ext !== ".m4v" && ext !== ".3gp" && ext !== ".f4p" && ext !== ".mkv" && ext !== ".wmv" && ext !== ".avi") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
