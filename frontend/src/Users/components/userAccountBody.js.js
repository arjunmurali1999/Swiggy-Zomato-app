import React from "react";
import {useState} from 'react'
import Order from "./order";
import Favourites from "./Favourites";
import Address from "./Address";
import OrderMobile from "./Ordermobile";
import Listofoptions from "./Listofoptions";
import Listofoptionsmobile from "./Listofoptionsmobile";
import Settings from "./Settings"
import Navbar from "../../Restaurants/components/Homepagenav";
import {OrderDetails} from "../../Restaurants/components/Orderbooking"
const UserAccountBody = ({ responsivewidth, name, email}) => {
  const [options,setOptions]=useState({
    order:true,
    favourite:false,
    address:false,
    payments:false,
    settings:false,
  })
  const [orders,setOrders]=React.useState(null);
  
  React.useEffect(()=>{
      const fetchorders = async () => {
        setOrders(await OrderDetails(email));
       };
       if(email)
       {
        fetchorders()
       }
  },[email]);
  const handleClick = (name) => {
    if (name === "Orders") {
      setOptions({order:true,favourite:false,address:false,settings:false})
    }
    if (name === "Favourites") {
      setOptions({order:false,favourite:true,address:false,settings:false})
    }
    if (name === "Addresses") {
      setOptions({order:false,favourite:false,address:true,settings:false})
    }
    if(name==="Settings")
    {
      setOptions({order:false,favourite:false,address:false,settings:true})
    }
  };
  return (
    <React.Fragment>
      <Navbar account={true}></Navbar>
      <div className=" h-100 w-100 " style={{ fontFamily: "Dongle",backgroundColor:'#ccccb3' }}>
        <h2 style={{ marginLeft: `${responsivewidth?'100px':'10px'}`, color: "white" }}>{name}</h2>
        <h2 style={{ marginLeft: `${responsivewidth?'100px':'10px'}`, color: "white" }}>{email}</h2>
        <div className="container w-100 h-100">
          <div className="card p-2 w-100 ">
            {!responsivewidth && (
              <Listofoptionsmobile
                handleClick={handleClick}>
              </Listofoptionsmobile>
            )}
            <div className="card-body d-flex flex-row">
              {responsivewidth && (
                <Listofoptions handleClick={handleClick}></Listofoptions>
              )}
              {(options.order && responsivewidth &&orders) && <Order orders={orders}></Order>}
              {(options.order && !responsivewidth &&orders) && (
                <OrderMobile orders={orders} ></OrderMobile>
              )}
              {options.favourite && <Favourites width={responsivewidth}></Favourites>}
              {(options.address && responsivewidth &&orders) && <Address orders={orders}></Address>}
              {(options.address && !responsivewidth &&orders)&& (
                <Address orders={orders} width={true}></Address>
              )}
              {options.settings && <Settings></Settings>}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserAccountBody;
