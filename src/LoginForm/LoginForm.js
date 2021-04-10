import React from "react";
import classes from "./LoginForm.module.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/useLoggedInUser";
function LoginForm({origin}){
    
    const [user,setUser] = React.useContext(UserContext);
    const [name,setName]=React.useState('');
    const [error,setError]=React.useState(false);
    const [signUp,setSignUp]=React.useState(false);
    const [password,setPassword]=React.useState('');
    
    let history = useHistory();
    React.useEffect(()=>{
        if(user)
        history.push("/home");
    },[user])
    function validateLogin(){
     let user=JSON.parse(localStorage.getItem(`${name}`));
     if(user)
     {
         if(user.password==password)
         {
            setUser(user);
            setError(false);
         }
     }
     else{
         setError(true)
     }
    }

   
    function create(){
        let data={name:name,password:password,type:origin}
      localStorage.setItem(`${name}`,JSON.stringify(data));
      setSignUp(false);
      setName('');
      setPassword('');
    }
    return (<div className={classes.login}>
           <div>
            <label>{signUp?'New ':''}Username</label><input type="text" placeholder="Enter username" value={name} onChange={(e)=>setName(e.target.value)}/></div>
            <div>  <label>{signUp?'New ':''}Password</label> <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
           <button disabled={signUp} onClick={validateLogin}>Login</button>
            { signUp?<button onClick={create}>Create Account</button>:''}
             { !signUp?<button onClick={()=>setSignUp(true)}>Sign Up</button>:''}
            {error?<div style={{color:'red'}}>Incorrect Creds...</div>:''}
        </div>);
}
export default LoginForm;