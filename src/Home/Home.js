import React from "react";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../context/useLoggedInUser";
import Card from "../Components/Card/Card";
import Modal from "../Components/Modal/Modal";
import classes from "./Home.module.css";
function Home(){
    const [villas,setVillas]=React.useState();
    const [loading,setLoading]=React.useState(false);
    const [villaToBeBooked,setVillaToBeBooked]=React.useState();
    const [user,]=React.useContext(UserContext);
    const [bookings,setBookings]=React.useState(JSON.parse(localStorage.getItem('Bookings'))||[]);
    const [open,setOpen]=React.useState(false);
    const [error,setError]=React.useState(false);
  
    function bookVillaForGuest(villaValToBeBooked)
    {
      setOpen(true);
      setVillaToBeBooked(villaValToBeBooked);
    }

    function acceptBooking(booking,state='accept')
    {
      
      let newArray=bookings.filter(bking=>{
          if(bking.id!=booking.id )
          return bking;
          
      })
      if(state=='accept')
      booking.status='approved';
      else
      booking.status='rejected';
     newArray.push(booking);
       localStorage.removeItem('Bookings');
      localStorage.setItem('Bookings',JSON.stringify(newArray));
       setBookings(newArray);
    }
   React.useEffect(()=>{
    function bookingApi(){
        setLoading(true);
      axios.get('https://run.mocky.io/v3/12e8811b-5d7b-4d23-ad10-7b9ecaf7fe8f')
      .then(res=>{
       setLoading(false);
        let olderInfo=[];
        if(JSON.parse(localStorage.getItem('Bookings')))
        {
          olderInfo=JSON.parse(localStorage.getItem('Bookings'));
        }
            else{
            
              localStorage.setItem('Bookings',JSON.stringify(res.data.Bookings));
              setBookings(res.data.Bookings);
            }
            
            let response=res.data.Bookings;
            if(olderInfo && olderInfo.length>0)
            {
            
              let ans=olderInfo;
              let flag=0;
              for(let i=0;i<response.length;i++)
              {
                flag=0;
                for(let j=0;j<olderInfo.length;j++)
                {
                  if(olderInfo[j].id==response[i].id)
                  {
                    flag=1;
                    break;
                  }
                }
                if(flag==0)
               { 
                ans.push(response[i]);
               }
              
              }
              localStorage.setItem('Bookings',JSON.stringify(ans));
              setBookings(ans);
            }
      })
      .catch(err=>{
        setLoading(false);
        setError(true);
      })
    }
    if(user && user.type=='host')
    bookingApi();
   },[user])
    React.useEffect(()=>{
         
      function villaApi(){
        setLoading(true);
        axios.get('https://run.mocky.io/v3/e28a2450-fa40-4850-bb2c-d39868dd187e')
           .then(res=>{
             setLoading(false);
             setVillas(res.data.Villas);    
        })
        .catch(err=>{
          setLoading(false);
          setError(true);
        }); 
      }

      if(user && user.type=='guest')
      villaApi();

    },[user])
       

      let cards=null;
      if(villas && user.type=='guest')
      {
          cards=villas.map(villa=>{
              return (<Card bookVillaForGuest={bookVillaForGuest}  key={villa.name} villa={villa}/>)
          })
      }else if(user.type=='host')
      {
       
        cards=bookings.map(info=>{
          return (<Card origin="host" acceptBooking={acceptBooking} key={info.id} booking={info}/>)
        })
      }


    return (<div>{user&&user.type=='guest'||user.type=='host'?<div className={classes.cardContainer}>
       {loading?<div>Loading.....</div>:''}
       {error?<div>Error Occurred :(</div>:''}
       {cards} 
       {open?<Modal isOpen={open} setOpen={setOpen} user={user} villa={villaToBeBooked}/>:''}</div>:<Redirect to="/"/>}
       
      </div>)
       
}
export default Home;