import React,{useState} from 'react'
import LoginComp from './Components/LoginComp'
import SignUp from './Components/SignUp'

function Authentication() {
    const [design, setdesign] = useState("1")
    return (
        <div className="middle">
           <div className="mydiv"> 
           {(design ==="1")? <LoginComp designChange={()=>setdesign('2')}/>:<SignUp designChange={()=>setdesign('1')}/>

           }
          
           </div>
        </div>
    )
}

export default Authentication
