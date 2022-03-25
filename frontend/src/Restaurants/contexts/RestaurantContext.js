import {createContext,useState,useEffect} from 'react'

import axios from "axios"
const RestaurantContext=createContext()
export const RestaurantProvider=({children})=>{
    const [restaurant,setrestaurant]=useState([])
        const fetchrestaurants=async(id)=>{
          const res=await axios.get(`http://localhost:3002/api/ver1/restaurant/${id}`)
          setrestaurant(res.data)
          return res.data
      }
      return <RestaurantContext.Provider value={{restaurant,fetchrestaurants}}>{children}</RestaurantContext.Provider>
}
export default RestaurantContext