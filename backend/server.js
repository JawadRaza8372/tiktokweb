const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const SignUp=require("./routes/SignUp");
const Login=require("./routes/Login");
const VideoData=require("./routes/VideoData");
const VideoUploadRoute=require("./routes/VideoUploadRoute");
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
mongoose.set('useFindAndModify', false);

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb connection is successfull");
})
app.use(VideoUploadRoute);
app.use(SignUp);
app.use(Login);
app.use(VideoData);

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});