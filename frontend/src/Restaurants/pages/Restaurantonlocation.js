import React from 'react';
import {useContext}from 'react'
import Restaurantnavbar from '../components/Homepagenav'
import { useParams } from 'react-router-dom'
import Footer from "../components/Footer"
import axios from 'axios'
import Pagination from "../components/pagination"
import Filteroptions from "../components/filteroptions"
import Filteroptionscollapse from "../components/Filteroptionscollapse"
import NotFoundPage from "../components/notfoundpage"
import LoginContext from "../contexts/LoginContext"
const Restaurantonlocation=({responsivewidth})=>{
  const {name}=useContext(LoginContext)
    const {city_name}=useParams()
    const [Restaurants,setRestaurants]=React.useState([])
    const [Restaurantfilter,setRestaurantfilter]=React.useState([])
    const [click,setclick]=React.useState(false)
    const [currentPage,setcurrentPage]=React.useState(1)
    const [Restaurantsperpage]=React.useState(2)
    React.useEffect(()=>{
        const fetchRestaurants=async()=>{
            const res=await axios.get(`http://localhost:3002/api/ver1/restaurant`,{params:{city_name:city_name}})
            setRestaurants(res.data)
        }
        fetchRestaurants()
    },[city_name])

    const data=(Restaurantdata,clickevent)=>{
      Restaurantdata=Restaurantdata.filter((Restaurant)=>{
        return Restaurant.city_name===city_name
      })
      setclick(clickevent)
      setRestaurantfilter(Restaurantdata)
  } 
  
    const indexoflastrestaurant=currentPage*Restaurantsperpage
    const indexoffirstrestaurant=indexoflastrestaurant-Restaurantsperpage
    const currentRestaurant=click?Restaurantfilter.slice(indexoffirstrestaurant,indexoflastrestaurant):Restaurants.slice(indexoffirstrestaurant,indexoflastrestaurant)
    const paginate=(pageNumber)=>setcurrentPage(pageNumber)
    //Window width
   
    
  

    return(
        <div>
            <Restaurantnavbar name={name}></Restaurantnavbar>
            {responsivewidth && (<div className=" p-4">
             <h2 >Restaurants in {city_name}</h2>
             </div>)}
             {!responsivewidth && (<div className=" p-4 d-flex justify-content-center">
             <h2 >Restaurants in {city_name}</h2>
             </div>)}
             {!responsivewidth && <Filteroptionscollapse width={responsivewidth} data={data}></Filteroptionscollapse>}
             <div className="d-flex justify-content-center w-100">
             {responsivewidth && <Filteroptions width={responsivewidth} data={data}></Filteroptions>}
             <div className={`container ${!responsivewidth?'w-100 mr-4':'w-75 ml-4'}  h-25`}>
               {currentRestaurant.length>0 && currentRestaurant.map((Restaurant)=>(
               <div key={Restaurant._id} className={`card container p-4  ${responsivewidth ? "w-75 m-4 ":"w-100"} h-25 mb-4 `}>
              <div className="card-body">
              <div className={`${!responsivewidth?"":"d-flex"}`}>
            <img
              className={`card-img-top ${!responsivewidth ?"w-100 h-500":"w-50 h-50"}   rounded`}
              src={Restaurant.thumb}
              alt="Card  cap"
            />
            <div className={`${responsivewidth?'p-4':'pt-4 pl-4'}`}>
              <h5 className={`card-title ${responsivewidth?"":"text-center"}`} >{Restaurant.name}</h5>
              {responsivewidth && <p className="card-text">{Restaurant.address}</p>}
            </div>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">CUISINES :{Restaurant.Cuisine[0].name},{Restaurant.Cuisine[1].name}</li>
          <li className="list-group-item">COST FOR TWO:{Restaurant.cost}</li>
        </ul>
        </div>
        <div className="card-body">
          <a href={`/Restaurant/Name/${Restaurant.id}`} type="button" className="btn btn-danger">MENU</a>
        </div>
      </div>
         ))}
         {(currentRestaurant.length===0 &&click) && <NotFoundPage></NotFoundPage>}
       </div>
      </div>
      <div className="d-flex justify-content-center">
      <Pagination postsPerpage={Restaurantsperpage} totalPosts={click?Restaurantfilter.length:Restaurants.length} paginate={paginate}></Pagination>
      </div>
      <Footer></Footer>
    </div>
    )
}
export default Restaurantonlocation