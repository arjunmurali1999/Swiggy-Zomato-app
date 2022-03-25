import React from "react"
import "./App.css";
import Homepage from "./Restaurants/pages/Homepage.js";
import Restaurantoverviewpage from "./Restaurants/pages/Restaurantoverviewpage"
import Restaurantonlocation from "./Restaurants/pages/Restaurantonlocation"
import Restaurantpage from "./Restaurants/pages/Restaurantpage"
import Login from "./Restaurants/pages/Login"
import Registeration from "./Restaurants/pages/Registeration"
import Successpage from "./Restaurants/pages/successpage"
import Accountpage from "./Users/pages/AccountPage"
 import {LoginProvider} from './Restaurants/contexts/LoginContext'
 import {RestaurantProvider} from "./Restaurants/contexts/RestaurantContext"
 import SuccessTableBooking from "./Restaurants/RestaurantpageComponents/SuccessTableBooking"
 import ForgotPasswordPage from "./Restaurants/pages/ForgotPasswordPage"
 import PasswordSuccess from "./Restaurants/pages/passwordSuccess"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  const [responsivewidth,setresponsivewidth]=React.useState(window.innerWidth<=1000?false:true);
  window.addEventListener('resize',()=>{
    if(window.innerWidth<=1000)
    {
       setresponsivewidth(false)
    }
    else{
        setresponsivewidth(true)
    }
})
  return (
    <Router>
      <Switch>
      <LoginProvider>
      <Route path="/" exact>
          <Homepage responsivewidth={responsivewidth}/>
        </Route>
        <Route path="/login" component={Login} exact/>
        <Route path="/Restaurant/:id" component={Restaurantoverviewpage} exact/>
        <Route exact path="/location/:city_name" >
        <Restaurantonlocation responsivewidth={responsivewidth}/>
        </Route>
        <Route path="/signup" component={Registeration} exact/>
        <RestaurantProvider>
        <Route path="/Restaurant/Name/:id"exact>
          <Restaurantpage width={responsivewidth}></Restaurantpage>
        </Route>
        <Route path="/tablebooking/success" component={SuccessTableBooking} exact></Route>
        </RestaurantProvider>
        <Route path="/success" component={Successpage} exact />
        <Route path="/account/:name"exact>
          <Accountpage responsivewidth={responsivewidth}></Accountpage>
        </Route>
        <Route path="/forgot-password" exact>
         <ForgotPasswordPage/>
        </Route>
        <Route path="/forgot-password/success" exact>
         <PasswordSuccess/>
        </Route>
        </LoginProvider>
        <Redirect to="/" exact/>
      </Switch>
    </Router>
  );
}

export default App;
