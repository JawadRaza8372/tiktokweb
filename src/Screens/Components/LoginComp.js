import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import {checkPhoneAndPaswd} from "../../Apis/Api"
import { useHistory } from 'react-router-dom'
function LoginComp({designChange}) {
    const [Data, setData] = useState({phone:''})
    let newlocation=useHistory()
    const handleClick=()=>{
        designChange()
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
    const submitfun=(e)=>{
        e.preventDefault();
        axios.patch(`${checkPhoneAndPaswd}`,Data).then((data)=>{
            if (data.data.message === "data fatched" && (data.data.responce.islogin)){
                newlocation.push('/')
                }
        }).catch((e)=>{
            console.log("error")
        
                console.log(e)
        })   
         }
    return (
        <>
         <form  onSubmit={submitfun} encType="multipart/form-data" id="form">
           <h3 style={{textAlign:"center",textDecoration:"underline",marginBottom:'30px'}}>Login</h3>
           <div className="input-group mb-2">
           <PhoneInput
            onChange={(phone)=>setData((prevalue)=>{return{
    ...prevalue,
    phone:phone
}})}
            country={'us'}
            buttonStyle={{backgroundColor:"transparent",border:"2px solid #fe2c55"}}
            inputStyle={{height:"30px",width:"100%",backgroundColor:"transparent",color:"#fe2c55",border:"none",borderBottom:"2px solid #fe2c55"}}
            />                            </div>
                                           <div className="input-group mb-2">
                                           <input className="form-control mycolor" type='password' name="password" id="password" onChange={handleChange} required placeholder="Password"/>
</div>
<button type="submit" className="followbutton">Login</button>
          

           </form>   <br/>
           <p onClick={handleClick} style={{cursor:"pointer"}}>Don't have An account!! Create One</p>   

        </>
    )
}

export default LoginComp
