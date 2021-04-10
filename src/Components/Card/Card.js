import React from "react";
import classes from "./Card.module.css"
function Card({villa,bookVillaForGuest,booking,origin,acceptBooking}){
    
     let cardContent='';
     if(villa)
     {
       cardContent=(<><div><img src={villa.imgUrl}/></div>
       <div className={classes.info}><div>{villa.name}</div>
       <div>🎯{villa.location}</div>
       <div><b>Cost/Day(Adult):</b> Rs.{villa.costPerDayAdult}</div>
       <div><b>Cost/Day(Child):</b> Rs.{villa.costPerDayChild}</div>
       <button onClick={()=>bookVillaForGuest(villa)}>Request to Book</button>
       </div></>);

     }
     else if(booking)
     {
       cardContent=(<>
       <div><img src={booking.imgUrl}/></div>
       <div className={classes.info}>
        <div>{booking.propertyName}</div>
        <div className={classes.infoSmall}><b>Owner:</b>{booking.propertyOwner}</div>
       <div className={classes.infoSmall}><b>Check In:</b>{new Date(booking.checkInDate).toISOString().slice(0,10)}</div>
        <div className={classes.infoSmall}><b>Check out:</b>{new Date(booking.checkoutDate).toISOString().slice(0,10)}</div> 
        <div className={classes.infoSmall}><b>Adults:</b>{booking.adults}</div>
        <div className={classes.infoSmall}><b>Children:</b>{booking.children}</div>
        <div className={classes.infoSmall}><b>Cost:</b>Rs.{booking.cost}</div>
        <div className={classes.infoSmall}><b>Status:</b>{booking.status}</div>
        {origin=='host'?<div className={classes.infoSmall}><b>Requested By:</b>{booking.user}</div>:''}
       {origin=='host' && booking.status!=='approved'&&booking.status!=='rejected'?<div><button onClick={()=>acceptBooking(booking)}>Accept the booking</button><button onClick={()=>acceptBooking(booking,'reject')}>Reject</button></div>:''}
        </div></>)
     }
     
    return (<div className={classes.card}>
     {cardContent}
    </div>);
}
export default Card;