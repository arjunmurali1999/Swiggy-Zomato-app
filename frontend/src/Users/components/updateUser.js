import {useState,useEffect} from 'react'
import axios from 'axios'
import {isAuthenticated} from '../../Restaurants/components/auth'

function UpdateUser(address) {
    const [userAddress,setUserAddress]=useState(address)
    const token=isAuthenticated()
 useEffect(()=>{
     if(address)
     {
        const updateAddress=async()=>{
            const response=await axios.put("http://localhost:3002/api/ver1/users",{address},{headers:{Authorization:`Bearer ${token}`}})
        }
        updateAddress()
     }
 },[])
 useEffect(()=>{
     const fetchAddress=async()=>{
         const response=await axios.get("http://localhost:3002/api/ver1/users/user",{headers:{Authorization:`Bearer ${token}`}})
         setUserAddress(response.data.data.address)
     }
     fetchAddress()
 })
return userAddress
}

export default UpdateUser
