import React from "react";
import {createPortal} from 'react-dom';
import {useHistory} from"react-router-dom";
import classes from "./Modal.module.css";
const Modal =({isOpen,setOpen,villa,user})=> {
    const history=useHistory();
    const [adultsNum,setAdultNum]=React.useState(0);
    const [childNum,setChildNum]=React.useState(0);
    const [checkInDate,setCheckInDate]=React.useState();
    const [checkoutDate,setCheckoutDate]=React.useState();
    const [totalCost,setTotalCost] =React.useState(0);
    const [nextDate,setNextDate]=React.useState();
    
    React.useEffect(()=>{
        let out=new Date(checkoutDate);
        let inDate=new Date(checkInDate);
        let diff=out-inDate;
        let days=Math.ceil(diff/(1000*60*60*24));
        if(days<1)
         return;
         let cost=0;
         if(adultsNum && childNum && days)
   cost=(villa.costPerDayAdult*adultsNum+villa.costPerDayChild*childNum)*days;
         setTotalCost(cost);
    },[childNum,adultsNum,checkInDate,checkoutDate])

   function bookVilla(){
    
        let data=JSON.parse(localStorage.getItem(`Bookings`))||[];
        data.push({id:Date.now(),user:user.name,adults:adultsNum,children:childNum,propertyOwner:villa.Owner,propertyName:villa.name,cost:totalCost,checkInDate:checkInDate,checkoutDate:checkoutDate,status:'Pending for approval from Host',imgUrl:villa.imgUrl});
        localStorage.setItem(`Bookings`,JSON.stringify(data));
         setOpen(false);
       history.push('/home/bookings');
   }
   function setDate(date,checkInOut)
   {
       let dateLocal=new Date(date);
       let checkInLocal=new Date(checkInDate);
       if(checkInOut=='end' && dateLocal.getTime()<checkInLocal.getTime())
       {
         return;
       }
          if(checkInOut=='start')
          {
          setCheckInDate(new Date(date));
         let nextDateLocal=new Date(dateLocal);
          nextDateLocal.setDate(dateLocal.getDate()+1);
           setNextDate(nextDateLocal);
          setCheckoutDate();
          }
          else
          setCheckoutDate(new Date(date));
   }
    if (!isOpen) return null;
  let container=document.getElementById("root")
 
    return (createPortal(
       <div className={classes.modal}>
       <div><span>{villa.name}</span></div>
       <br></br>
       <hr/>
       <div> 
           <div className={classes.userInput}><label>Adult(s):</label><input type="number" min="1" max="50" onChange={(e)=>setAdultNum(e.target.value)}/></div>
           <div className={classes.userInput}><label>Children:</label><input type="number" min="0" max="10" onChange={(e)=>setChildNum(e.target.value)}/></div>
           <div className={classes.userInput}><label>Check In:</label><input type="date" min={new Date().toISOString().slice(0,10)} onChange={(e)=>setDate(e.target.value,'start')}/></div>
           <div className={classes.userInput}><label>Check In:</label><input type="date" min={nextDate?nextDate.toISOString().slice(0,10):''} disabled={!checkInDate} onChange={(e)=>setDate(e.target.value,'end')}/></div>
           <div>TotalCost:{totalCost}</div>
        </div>
       <div> 
           <button onClick={bookVilla}>Book</button>
           <button onClick={()=>setOpen(false)}>Close</button>
       </div>  
       </div>
      ,container));
    }
    export default Modal;