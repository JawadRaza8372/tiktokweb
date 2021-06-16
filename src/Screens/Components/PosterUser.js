import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from "@material-ui/core/Avatar";
function PosterUser({Data}) {
    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
        <Avatar style={{height:"60px",width:"60px",marginLeft:"5px",marginRight:"15px"}}  src={`${Data.img}`} alt={`${Data.name}`}/>
    <h6 style={{fontSize:"20px",textTransform:"capitalize",marginTop:"auto",marginBottom:"auto"}}>{Data.name}<span>{(Data.creator)?<CheckCircleIcon style={{marginLeft:"10px",fontSize:"16px",color:"#2ce5fe"}}/>:null}</span></h6>
<button style={{marginLeft:"auto"}} className="followbutton">Follow</button>

        </div>
        
    )
}
function PosterUser2({Data}) {
    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
        <Avatar style={{height:"60px",width:"60px",marginLeft:"5px",marginRight:"15px"}}  src={`${Data.img}`} alt={`${Data.name}`}/>
        <div className="col">
    <p style={{fontSize:"16px",textTransform:"capitalize",marginTop:"auto",marginBottom:"auto"}}>{Data.name}<span>{(Data.creator)?<CheckCircleIcon style={{marginLeft:"10px",fontSize:"16px",color:"#2ce5fe"}}/>:null}</span></p>
    <p style={{fontSize:"12px",textTransform:"capitalize",marginTop:"auto",marginBottom:"auto"}}>{Data.description}</p>
</div>
<button style={{marginLeft:"auto"}} className="followbutton">Follow</button>

        </div>
        
    )
}
export default PosterUser
export {PosterUser2}
