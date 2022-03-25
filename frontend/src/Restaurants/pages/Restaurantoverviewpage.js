import React from 'react'
import Restaurantnavbar from '../components/Homepagenav'
import { useParams } from 'react-router-dom'
import Footer from "../components/Footer"
import axios from 'axios'
 const Restaurantpage = () => {
    const [Restaurants,setRestaurants]=React.useState([])
    const {id}=useParams()
    React.useEffect(()=>{
        const fetchRestaurants=async()=>{
          try{
            const {data}=await axios.get(`http://localhost:3002/api/ver1/restaurant/${id}`)
            setRestaurants(data)
          }catch(err) {
            console.log(err)
          }
        }
        fetchRestaurants()
        },[id])
    return (
        <div>
            <Restaurantnavbar></Restaurantnavbar>
            <div className="p-4">
            {Restaurants.map((Restaurant)=>(
            <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner p-4" >
        <div className="carousel-item active">
          <img src={`/images/restaurantimages/${Restaurant.name.toLowerCase().replace(/\s/g,"")}-1.jpeg`} className="d-block w-100" alt="..." style={{height:"500px"}}/>
        </div>
        <div className="carousel-item">
          <img src={`/images/restaurantimages/${Restaurant.name.toLowerCase().replace(/\s/g,"")}-2.jpeg`} className="d-block w-100" alt="..." style={{height:"500px"}}/>
        </div>
        <div className="carousel-item">
          <img src={`/images/restaurantimages/${Restaurant.name.toLowerCase().replace(/\s/g,"")}-3.jpeg`} className="d-block w-100" alt="..." style={{height:"500px"}}/>
        </div>
      </div>
      <div>
      <a className="carousel-control-prev" href="#carouselExampleControls"  role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon " aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
    <div className="p-4 d-flex">
      <img src={`/images/restaurantimages/${Restaurant.name.toLowerCase().replace(/\s/g,"")}-1.jpeg`} alt="Restaurantimage" className="rounded" style={{height:"100px",width:"100px"}}/>
      <h1 className="font-weight-bold p-4">{Restaurant.name}</h1>
    </div>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-4">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <a className="nav-link " href="#about"><h4 className="text-primary">Overview</h4><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#contact"><h4 className="text-primary">Contact</h4><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#"><h4 className="text-primary">Pricing</h4><span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <a href={`/Restaurant/Name/${Restaurant.id}`} type="button" className="btn btn-danger float-right btn-lg pr-4">Place Online Order</a>
      </div>
    </nav>
      <div className="d-flex justify-content-start p-4 font-weight-bold" id="about" style={{color: "#000080"}}>
         <h4 className="font-weight-bold">About This Place</h4>
      </div>
      <div className="p-4" style={{color:"#003380"}}>
        <h4>Cuisine</h4>
        <p>{Restaurant.Cuisine[0].name},{Restaurant.Cuisine[1].name}</p>
      </div>
      <div className="p-4" style={{color:"#003380"}}>
        <h4>Average Cost</h4>
        <p>{Restaurant.cost}</p>
      </div>
      <hr className="m-4"  style={{height:"4px",backgroundColor:"#c2c2a3"}}/>
      <div id="contact" className="p-4" >
        <h4 className="font-weight-bold">Contact</h4>
      </div>
      <div className="p-4">
        <h4 className="text-secondary">Phone No</h4>
        <p className="text-dark"> 89***** </p>
      </div>
      <div className="p-4">
        <h4 className="font-weight-bold">{Restaurant.name}</h4>
        <p className="text-secondary"> {Restaurant.address} </p>
      </div>
      </div>
        ))}
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Restaurantpage
