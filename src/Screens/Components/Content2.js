import React from 'react'
import MenuItem from './MenuItem'
import {PosterUser2} from './PosterUser'  
import { NavLink} from "react-router-dom"
const data={
    img:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name:"jawad",
    track:"any music",
    description:"We can Improve rameter"
} 
function Content2() {
    return (
        <>
<div className="mb-2" style={{display:"flex",flexDirection:"row"}}>
          <NavLink style={{flex:"1"}} activeClassName="activebutton" exact className="sidebuttons" to="/"><MenuItem num="1"/></NavLink></div>
          <div style={{display:"flex",flexDirection:"row"}}>
          <NavLink style={{flex:"1"}} activeClassName="activebutton" exact className="sidebuttons" to="/following"><MenuItem/></NavLink></div> 
          <hr/>
                  <p>Log in to follow creators, like videos, and view comments.</p>
                  <div style={{display:"flex",flexDirection:"row"}}>
          <NavLink style={{flex:"1"}} activeClassName="activebutton" exact className="sidebuttons2" to="/authentication">login</NavLink></div> 
                  <hr/>

          <p>Suggested Accounts</p>
          <div style={{overflowY:"auto",height:"36vh"}}>
          <PosterUser2 userId={"anyid"} description={"des"} creator={true}/>
          </div><hr/>
         <p>© 2021 TikTokweb</p>
        </>
    )
}

export default Content2
