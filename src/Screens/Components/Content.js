import React from 'react'
import VideoComponent from './VideoComponent'
function Content() {
    return (
        <div style={{overflowY:"auto",maxHeight:"95vh"}}>
            <VideoComponent userId="user" creator={true} description="description" track="any music" videolink="https://res.cloudinary.com/jawadraza8372/video/upload/v1623917934/myfolder/mysubfolder/video.mp41623917922304.mp4" likes="31" comments="31" share="31"/>
<br/>
<br/>
        </div>
    )
}

export default Content
