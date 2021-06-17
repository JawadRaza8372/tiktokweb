import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from "@material-ui/core/Avatar";
function PosterUser({userId,creator}) {
    const username="username";
    const img="jdfsfh";
    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
        <Avatar style={{height:"60px",width:"60px",marginLeft:"5px",marginRight:"15px"}}  src={`${img}`} alt={`${username}`}/>
    <h6 style={{fontSize:"20px",textTransform:"capitalize",marginTop:"auto",marginBottom:"auto"}}>{username}<span>{(creator)?<CheckCircleIcon style={{marginLeft:"10px",fontSize:"16px",color:"#2ce5fe"}}/>:null}</span></h6>
<button style={{marginLeft:"auto"}} className="followbutton">Follow</button>

        </div>
        
    )
}
function PosterUser2({userId,description,creator}) {
    const username="username";
    const img="jdfsfh";
    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
        <Avatar style={{height:"60px",width:"60px",marginLeft:"5px",marginRight:"15px"}}  src={`${img}`} alt={`${username}`}/>
        <div className="col">
    <p style={{fontSize:"16px",textTransform:"capitalize",marginTop:"auto",marginBottom:"auto"}}>{username}<span>{(creator)?<CheckCircleIcon style={{marginLeft:"10px",fontSize:"16px",color:"#2ce5fe"}}/>:null}</span></p>
    <p style={{fontSize:"12px",textTransform:"capitalize",marginTop:"auto",marginBottom:"auto"}}>{description}</p>
</div>
<button style={{marginLeft:"auto"}} className="followbutton">Follow</button>

        </div>
        
    )
}
export default PosterUser
export {PosterUser2}
