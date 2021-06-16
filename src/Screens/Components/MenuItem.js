import React from 'react'
import { NavLink } from 'react-bootstrap'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
function MenuItem({num}) {
    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
{(num === "1")?<p style={{justifyContent:"center",fontSize:"20px",fontWeight:"bold",marginTop:"auto",marginBottom:"auto"}}> <HomeRoundedIcon style={{marginRight:"10px"}}/>For you</p>
:<p style={{justifyContent:"center",fontSize:"20px",fontWeight:"bold",marginTop:"auto",marginBottom:"auto"}}> <PeopleAltOutlinedIcon style={{marginRight:"10px"}}/>Following</p>


}
        </div>
    )
}

export default MenuItem
