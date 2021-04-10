import { Switch ,Route } from "react-router-dom";
import Home from "./Home/Home";
import './App.css';
import LoginPage from "./LoginPage/Login";
import Booking from "./Home/Booking/Booking";
import Header from "./Components/Header/Header"
import {UserProvider} from "./context/useLoggedInUser"
function App() {
  return (
    <UserProvider>
    <div className="App">
     <Header/>
      <div className="main">
      <Switch>
      <Route path="/home/bookings" exact component={Booking}/>
      <Route path="/home" exact component={Home}/>
       <Route path="/" exact component={LoginPage}/>  
      </Switch>
      </div>
    </div>
    </UserProvider>
  );
}

export default App;
