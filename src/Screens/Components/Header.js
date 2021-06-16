import React from 'react'
import {NavLink} from "react-router-dom";
import {Navbar,Nav,Button} from 'react-bootstrap';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
function Header() {
    return (<div>
        <Navbar style={{borderBottom:"2px solid #d1cdcd",paddingTop:"10px"}} collapseOnSelect expand="lg" bg="light" variant="light">
         <Navbar.Brand href="/home"><div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}>
         <img style={{objectFit:"contain",marginRight: ".5rem",alignSelf:"center"}} alt="logo" src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"/>WEB
       </div></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <div style={{marginLeft:"auto",marginRight:"auto",background:"lightgrey",borderRadius:"25px",padding:"5px",overflow:"hidden",heigth:"80%",width:"320px"}}>
           <input style={{width:"80%"}}  type="text" placeholder="search"/>
           <button className="searchbutton"><span><SearchOutlinedIcon/></span></button>
         </div>
           <Nav style={{marginLeft:"auto"}}>
               <NavLink style={{marginRight:"15px"}} exact activeClassName="active_class"  className="nav-link h6"  to="/upload">Upload</NavLink>
         <button className="followbutton">Logout</button>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
        
       </div>);
}

export default Header
