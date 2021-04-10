import React from "react";
import Card from "../../Components/Card/Card";
import {Redirect } from "react-router-dom";
import { UserContext } from "../../context/useLoggedInUser";
import classes from "../Home.module.css";
 function Booking(){
  
   const [user,]=React.useContext(UserContext);
   const [bookings,setBookings]=React.useState([]);

   React.useEffect(()=>{
    let bookings=JSON.parse(localStorage.getItem('Bookings'))||[];
    let userBookings=bookings.filter(booking=>booking.user!=user);
     setBookings(userBookings);
   },[])

  
  return(<div className={classes.cardContainer}>{user?bookings.length>0?bookings.map((booking,i)=><Card  key={i} booking={booking}/>):<div>No Bookings done by you yet !!</div>:<Redirect to="/"/>}</div>)

 }
 export default Booking;
