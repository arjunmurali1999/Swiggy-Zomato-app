import React from 'react';
import {useContext} from 'react'
import Restaurantnav from "../RestaurantpageComponents/Restaurantnav"
import Restaurantabout from "../RestaurantpageComponents/Restaurantabout"
import Menu from "../RestaurantpageComponents/Menu"
import Footer from "../RestaurantpageComponents/Footer"
import RestaurantContext from "../contexts/RestaurantContext"
import LoginContext from "../contexts/LoginContext"
import {useParams} from "react-router-dom"
 const Restaurantpage = ({width}) => {
   const {name}=useContext(LoginContext)
   const {id}=useParams()
   const {fetchrestaurants} = useContext(RestaurantContext)
   const [restaurants,setrestaurants]=React.useState([])
   React.useEffect(()=>{
     const fetchRestaurants = async() => {
         setrestaurants(await fetchrestaurants(id))
     }
     fetchRestaurants()
   },[])
  return (
  <div className="w-100 ">
    <Restaurantnav name={name} width={width}/>
    <Restaurantabout restaurants={restaurants}/>
    <Menu/>
    {restaurants.length>0 &&<Footer restaurants={restaurants}/>}
  </div>
  );
};
 export default Restaurantpage;