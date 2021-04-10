import React from "react";
import classes from "./Login.module.css";
import LoginForm from "../LoginForm/LoginForm";
function Login(){
    return (<div className={classes.login}>
        <div className={classes.card}>Guests
        <LoginForm origin="guest"/>
        </div> 
        <div className={classes.card}>Hosts
       <LoginForm origin="host"/>
        </div>
       </div>
    );
}
export default Login;