const cloudinary =require("cloudinary").v2;
require('dotenv').config();

cloudinary.config({
  cloud_name:process.env.Cloud_name,
  api_key:process.env.API_Key,
  api_secret:process.env.API_Secret,
});

module.exports = cloudinary;
