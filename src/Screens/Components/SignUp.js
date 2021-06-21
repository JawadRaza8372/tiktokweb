import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import {createSession,checkSession,startSession,endSession,get_Verification,delateVideoData,postPhoto,postVideo,getVideoDat,postVideoData,updateVideoDescription,forgetPaswd,checkPhoneAndPaswd,registerAccount,updateProfilePhoto,resetPaswd}
from "../../Apis/Api"
import { useHistory } from 'react-router-dom'
function SignUp({designChange}) {
    let newlocation=useHistory()
    const [Data, setData] = useState({phone:''})
    const [message, setmessage] = useState(null)

    const handleClick=()=>{
        designChange()
    }
    const handleClick2=()=>{
newlocation.push('/accountVerification')
    }
    const submitfun=(e)=>{
e.preventDefault();
axios.post(`${registerAccount}`,Data).then((data)=>{
if (data.data.message === "SignUp Successfull Verify the Account plz"){
setmessage("Account Created Please Verify Your Account");
newlocation.push('/accountVerification')
}
}).catch((e)=>{
    console.log("error")

        console.log(e)
})   
 }
    const handleChange=(e)=>{
        const name=e.target.id;
        const value=e.target.value;
        setData((prevalue)=>{
            return{
                ...prevalue,
                [name]:value
            }
        })
    }

    return (
        <>
        <form onSubmit={submitfun} encType="multipart/form-data" id="form">
           <h3 style={{textAlign:"center",textDecoration:"underline",marginBottom:'30px'}}>Sign Up</h3>
           <div className="input-group mb-2">
            <input className="form-control mycolor" type='text' name="name" id="name" onChange={handleChange} required placeholder="Your Name"/>
            </div>
            <div className="input-group mb-2">
            <input className="form-control mycolor" type='text' name="username" id="username" onChange={handleChange} required placeholder="Your User Name"/>
            </div>
            <div className="input-group mb-2">
            <input className="form-control mycolor" type='password' name="password" id="password" onChange={handleChange} required placeholder="Password"/>
            </div>
            <div className="input-group mb-2">
            <input className="form-control mycolor" type='password' name="confirm" id="confirm" onChange={handleChange} required placeholder="Confirm Password"/>
            </div>
            <div className="input-group mb-4">
            <PhoneInput
            onChange={(phone)=>setData((prevalue)=>{return{
    ...prevalue,
    phone:phone
}})}
            country={'us'}
            buttonStyle={{backgroundColor:"transparent",border:"2px solid #fe2c55"}}
            inputStyle={{height:"30px",width:"100%",backgroundColor:"transparent",color:"#fe2c55",border:"none",borderBottom:"2px solid #fe2c55"}}
            />                            
            </div>
            
            <button type="submit" className="followbutton">Register</button>
           </form> 
           <br/>
           {(message)?<p onClick={handleClick2} style={{cursor:"pointer",color:"greenyellow !important"}}>{message}</p>:
           <p onClick={handleClick} style={{cursor:"pointer"}}>Have An account!! Login.</p>
           }
        </>
    )
}

export default SignUp
