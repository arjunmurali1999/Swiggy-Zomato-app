import React from 'react';

function Listofoptionsmobile({handleClick}) {
  return (
    <div className="card bg-light w-100">
    <div className="card-body d-flex justify-content-between ">
      <button className="   btn btn-outline-none  "  onClick={()=>handleClick('Orders')} ><i className="bi bi-bag-check-fill"></i><span className="font-weight-bold p-1">Orders</span></button>
      <button className=" btn btn-outline-none"  onClick={()=>handleClick('Favourites')} ><i className="bi bi-heart-fill"></i><span className="font-weight-bold p-1" >Favourites</span></button>
      <button className=" btn btn-outline-none" onClick={handleClick}><i className="bi bi-credit-card"></i><span className="font-weight-bold p-1" >Payments</span ></button>
      <button className=" btn btn-outline-none"  onClick={()=>handleClick('Addresses')} ><i className="bi bi-geo-alt-fill"></i><span className="font-weight-bold p-1" >Addresses</span></button>
    </div>
  </div>);
}

export default Listofoptionsmobile;
