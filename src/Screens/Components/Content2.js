import React from 'react'
import MenuItem from './MenuItem'
import {PosterUser2} from './PosterUser'  
const data={
    img:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name:"jawad",
    track:"any music",
    description:"We can Improve rameter"
} 
function Content2() {
    return (
        <>
          <button className="sidebuttons mb-2"><MenuItem num="1"/></button>
          <button className="sidebuttons"><MenuItem/></button>
          <hr/>
          <p>Log in to follow creators, like videos, and view comments.</p>
          <button className="bigbutton">Login</button>          <hr/>

          <p>Suggested Accounts</p>
          <div style={{overflowY:"auto",maxHeight:"38vh"}}>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>
          <PosterUser2 Data={data}/>

          <PosterUser2 Data={data}/>
          </div><hr/>
         <p>© 2021 TikTokweb</p>
        </>
    )
}

export default Content2
