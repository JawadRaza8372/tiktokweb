import React from 'react'
import PosterUser from './PosterUser'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MyVideo from './MyVideo'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
const data={
    img:"https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name:"jawad",
    creator:true,
    track:"any music",
    description:"We can Improve the deep learning algo with these Techniques Data Optimization Algorithm tuningHyper-Parameter Optimization Ensembles, Ensembles, Ensembles Algorithm tuning Don’t let your ego get the best of you."
}
function VideoComponent() {
    return (
        <>
        <PosterUser Data={data}/>
        <p style={{paddingLeft:"70px",paddingRight:"75px",justifyContent:"center",fontSize:"14px"}}>{data.description}</p>
        <p style={{paddingLeft:"70px",paddingRight:"75px",justifyContent:"center",fontSize:"14px",fontWeight:"bolder"}}><MusicNoteIcon style={{marginRight:"10px"}}/>{data.track}</p>
       <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
       <MyVideo/>
        <div style={{marginLeft:"25px"}} className="col">
        <div style={{margin:"auto"}}  className="col">
        <div style={{height:"50px",width:"50px",background:"rgba(22, 24, 35, 0.06)",borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <FavoriteIcon/>
        </div>
           
            <p style={{fontSize:"12px",paddingLeft:"10px"}}>number</p>
            </div>
            <div style={{margin:"auto"}} className="col">
            <div style={{height:"50px",width:"50px",background:"rgba(22, 24, 35, 0.06)",borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <CommentRoundedIcon/>
        </div>
            <p style={{fontSize:"12px",paddingLeft:"10px"}}>number</p>

            </div>
            <div style={{margin:"auto"}} className="col">
            <div style={{height:"50px",width:"50px",background:"rgba(22, 24, 35, 0.06)",borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <ShareRoundedIcon/>
        </div>
           
            <p style={{fontSize:"12px",paddingLeft:"10px"}}>number</p>

            </div>
        </div>
       </div> 
       <hr/>
        </>
    )
}

export default VideoComponent
