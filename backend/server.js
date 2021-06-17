const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
// const BlockByNameRoutes=require("./routes/BlockByNameRoutes");
// const BlockByNumberRoutes=require("./routes/BlockByNumberRoutes");
// const BlockByCompanyRoutes=require("./routes/BlockByCompanyRoutes");
// const CompanyCategoryRoutes=require("./routes/CompanyCategoryRoutes");
// const SignUp=require("./routes/SignUp");
// const Login=require("./routes/Login");
// const CityRoutes=require('./routes/CityRoutes')
// const userSession=require("./routes/userSession");
const exerciserout=require("./routes/exercise.pic");
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

// app.use("images")
// app.use("/blockByName",BlockByNameRoutes);
// app.use("/blockByNumber",BlockByNumberRoutes);
// app.use("/blockByCompany",BlockByCompanyRoutes);
// app.use("/companyCategory",CompanyCategoryRoutes);
// app.use("/userAccount",SignUp);
// app.use("/user",Login);
app.use(exerciserout);





app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});