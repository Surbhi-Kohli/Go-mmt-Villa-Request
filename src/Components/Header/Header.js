import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/makemytrip_logo.png";
import { UserContext } from "../../context/useLoggedInUser";
import {NavLink } from "react-router-dom";

function Header(){
    const [user,setUser]=React.useContext(UserContext);
  
   
return(
<header className={classes.header}>
<div>Go MMT Villa Booking<img src={logo} alt="logo" style={{width:'25px',height:'25px'}}/></div>
{user?<div style={{display:'flex',marginRight:'10px'}}>
{user && user.type=='guest'?<div style={{marginRight:'5px'}}><NavLink to="/home/bookings" className={classes.nav} exact activeClassName={classes.navLinkActive} >My Bookings</NavLink></div>:''}
<div style={{marginRight:'5px'}}><NavLink to="/home" className={classes.nav} exact activeClassName={classes.navLinkActive}>{user.name}({user.type})</NavLink></div>
<button onClick={()=>setUser('')}>➖Logout</button></div>:""}
</header>)

}
export default Header;