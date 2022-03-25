import React from 'react'
import axios from 'axios'
 const Filteroptions = ({width,data}) => {
   const [filterdata,setfilterdata]=React.useState({})
   const [cuisine,setCuisine]=React.useState({})
   const[costdata,setcostdata]=React.useState({})
   
   const handleChange=event=>{
  
     setfilterdata({...filterdata,[event.target.name]:event.target.value})
   }
   const handleCuisine=event=>{
     setCuisine({...cuisine,[event.target.name]:event.target.value})
   }
   const handlecost=event=>{
     setcostdata({...costdata,[event.target.name]:event.target.value})
   }
   const fetchrestaurant=async(filterdata,cost)=>{ 
     const clickevent=true 
     const Restaurant=await axios.get(`http://127.0.0.1:3002/api/ver1/restaurant${cost}`,{params:filterdata})
     data(Restaurant.data,clickevent)
   }
   const handleClick=(event)=>{
     event.preventDefault();
     let Cuisines=Object.values(cuisine)
     Cuisines=Cuisines.join()
     if(Cuisines!=="")
     {
      filterdata.Cuisine=Cuisines  //Joining Cuisines in the filter data
     }      
     const cost=costdata.cost?`?${costdata.cost}`:"";
     fetchrestaurant(filterdata,cost)
   }
   
    return (
        <div className="card w-25 m-4">
            <div>
          <div className="card-header">
            <h5>Filters</h5>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <h6>Cuisine</h6>
            </blockquote>
            <div className="input-group pb-1">
              <div className="input-group-text w-75">
                <input
                  type="checkbox"
                  id="c-1"
                  name="Cuisine-1"
                  value="North Indian"
                  onChange={handleCuisine}
                />
                <label className="p-2" htmlFor="c-1">North Indian</label>
              </div>
            </div>
            <div className="input-group pb-1">
              <div className="input-group-text w-75">
                <input
                  type="checkbox"
                  id="c-2"
                  name="Cuisine-2"
                  value="South Indian"
                  onChange={handleCuisine}
                />
                <label className="p-2" htmlFor="c-2">South Indian</label>
              </div>
            </div>
            <div className="input-group pb-1">
              <div className="input-group-text w-75">
                <input
                  type="checkbox"
                  id="c-3"
                  name="Cuisine-3"
                  value="Chinese"
                  onChange={handleCuisine}
                />
                <label className="p-2" htmlFor="c-3">Chinese</label>
              </div>
            </div>
            <div className="input-group pb-1">
              <div className="input-group-text w-75">
                <input
                  type="checkbox"
                  id="c-4"
                  name="Cuisine-4"
                  value="Fast Food"
                  onChange={handleCuisine}
                />
                <label className="p-2" htmlFor="c-4">Fast Food</label>
              </div>
            </div>
            <div className="input-group pb-4">
              <div className="input-group-text w-75">
                <input
                  type="checkbox"
                  id="c-5"
                  name="Cuisine-5"
                  value="Street Food"
                  onChange={handleCuisine}
                />
                <label className="p-2" htmlFor="c-5">Street Food</label>
              </div>
            </div>
            <div>
              <h6>Cost For Two</h6>
            </div>
            <div className="input-group ">
              <div className="input-group pb-2">
                <div className="input-group-text w-75">
                  <input
                    type="radio"
                    name="cost"
                    id="co-1"
                    value="cost[lt]=250"
                    onChange={handlecost}
                  />
                  <label className="p-2" htmlFor="co-1">Less than र250</label>
                </div>
              </div>
              <div className="input-group pb-2">
                <div className="input-group-text w-75">
                  <input
                    type="radio"
                    id="co-2"
                    name="cost"
                    value="cost[gte]=250&cost[lt]=500"
                    onChange={handlecost}
                  />
                  <label className="p-2" htmlFor="co-2">र250-र500</label>
                </div>
              </div>
              <div className="input-group pb-2">
                <div className="input-group-text w-75">
                  <input
                    type="radio"
                    name="cost"
                    id="co-3"
                    value="cost[gte]=500&cost[lt]=750"
                    onChange={handlecost}
                  />
                  <label className="p-2" htmlFor="co-3">र500-र750</label>
                </div>
              </div>
              <div className="input-group pb-2">
                <div className="input-group-text w-75">
                  <input
                    type="radio"
                    name="cost"
                    id="co-4"
                    value="cost[gte]=750&cost[lt]=1000"
                    onChange={handlecost}
                  />
                  <label className="p-2" htmlFor="co-4">र750-र1000</label>
                </div>
              </div>
              <div className="input-group pb-4">
                <div className="input-group-text w-75">
                  <input
                    type="radio"
                    name="cost"
                    id="co-5"
                    value="cost[gte]=999"
                    onChange={handlecost}
                  />
                  <label className="p-2" htmlFor="co-5">र1000+</label>
                </div>
              </div>
            </div>
            <div>
              <h6>Sort</h6>
            </div>
            <div className="input-group pb-2">
              <div className="input-group-text w-75">
                <input type="radio" name="sort" id="sortasc" onChange={handleChange} value="cost" />
                <label htmlFor="sortasc" className="p-2">Low To High</label>
              </div>
            </div>
            <div className="input-group pb-2">
              <div className="input-group-text w-75">
                <input type="radio" name="sort" id="sortdesc"  onChange={handleChange} value="-cost" />
                <label htmlFor="sortdesc" className="p-2">High To Low</label>
              </div>
            </div> 
            <button className="btn btn-outline-danger mt-2" onClick={handleClick} type="button" id="btnfilter">Apply</button>
          </div>
          </div>
        </div>
    )
}
export default Filteroptions
