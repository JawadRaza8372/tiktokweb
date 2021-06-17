import React from 'react'
import PosterUser from './PosterUser'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MyVideo from './MyVideo'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
function VideoComponent({userId,creator,description,track,videolink,likes,comments,share}) {
    return (
        <>
        <PosterUser userId={`${userId}`} creator={creator}/>
        <p style={{paddingLeft:"70px",paddingRight:"75px",justifyContent:"center",fontSize:"14px"}}>{description}</p>
        <p style={{paddingLeft:"70px",paddingRight:"75px",justifyContent:"center",fontSize:"14px",fontWeight:"bolder"}}><MusicNoteIcon style={{marginRight:"10px"}}/>{track}</p>
       <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
       <MyVideo url={videolink}/>
        <div style={{marginLeft:"25px"}} className="col">
        <div style={{margin:"auto"}}  className="col">
        <div style={{height:"50px",width:"50px",background:"rgba(22, 24, 35, 0.06)",borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <FavoriteIcon/>
        </div>
           
            <p style={{fontSize:"12px",paddingLeft:"20px"}}>{likes}</p>
            </div>
            <div style={{margin:"auto"}} className="col">
            <div style={{height:"50px",width:"50px",background:"rgba(22, 24, 35, 0.06)",borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <CommentRoundedIcon/>
        </div>
            <p style={{fontSize:"12px",paddingLeft:"20px"}}>{comments}</p>

            </div>
            <div style={{margin:"auto"}} className="col">
            <div style={{height:"50px",width:"50px",background:"rgba(22, 24, 35, 0.06)",borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <ShareRoundedIcon/>
        </div>
           
            <p style={{fontSize:"12px",paddingLeft:"20px"}}>{share}</p>

            </div>
        </div>
       </div> 
       <hr/>
        </>
    )
}

export default VideoComponent
