import  MenuItem  from './Components/MenuItem'
import React from 'react'
import Content from './Components/Content'
import Content2 from './Components/Content2'
import MyVideo from './Components/MyVideo'
import VideoComponent from './Components/VideoComponent'
function Home() {
    return (
        <div style={{display:"flex",flexDirection:"row",height:"92vh",width:"100%",overflow:"hidden"}}>
<div  className="col-8 mx-auto mt-4">
<div  className="row justify-content-center">
<div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-4 col-xl-4">
<Content2/>  

</div> 
<div className="col col-10 col-xs-10 col-sm-10 col-lg-8 col-md-10 col-xl-8">
<Content/>  

</div> 


</div>
</div> 
        </div>

        )
}

export default Home
