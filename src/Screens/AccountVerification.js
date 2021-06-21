import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import {get_Verification} from "../Apis/Api"
import { useHistory } from 'react-router-dom'

function AccountVerification() {
    let newlocation=useHistory()
    const [Data, setData] = useState({phone:''})
    const [message, setmessage] = useState(null)
  
    const submitfun=(e)=>{
e.preventDefault();
console.log(Data)
axios.post(`${get_Verification}`,Data).then((data)=>{
    if (data.data.message === "Account Verified.Please Login Your Account"){
        setmessage("Account Verified.Please Login Your Account")
        newlocation.push('/authentication')
}
        
}).catch((e)=>{
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
        <><div className="middle">
        <div className=" mydiv">
        <form onSubmit={submitfun} encType="multipart/form-data" id="form">
           <h3 style={{textAlign:"center",textDecoration:"underline",marginBottom:'30px'}}>Verify Account</h3>
           <p style={{textAlign:"center",fontSize:'12px'}}>Verification Code is sent To Your Number.</p>
           <br/>
           <div class="input-group mb-4">
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
            <div class="input-group mb-2">
            <input className="form-control mycolor" type='text' name="verifyCode" id="verifyCode" onChange={handleChange} required placeholder="Enter Your Verification Code"/>
            </div>
            <button type="submit" className="followbutton">Register</button>
           </form><br/>
           {(message)?<p>Account Verified!! Login.</p>:null}
        </div>

        </div>
           
          
        </>
    )
}

export default AccountVerification
