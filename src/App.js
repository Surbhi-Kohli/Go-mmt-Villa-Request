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
      <Route path="/Go-mmt-Villa-Request/home/bookings" exact component={Booking}/>
      <Route path="/Go-mmt-Villa-Request/home" exact component={Home}/>
       <Route path="/Go-mmt-Villa-Request" exact component={LoginPage}/>  
      </Switch>
      </div>
    </div>
    </UserProvider>
  );
}

export default App;
