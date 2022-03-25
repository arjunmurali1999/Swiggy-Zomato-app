import React from 'react';

function Listofoptions({handleClick}) {
  return (
    <div className="card bg-light w-25" style={{width: '18rem'}}>
    <div className="card-body d-flex flex-column vh-100">
      <button className="card-title p-3 btn btn-outline-none " id="order" onClick={()=>handleClick('Orders')} style={{fontSize:'25px'}}><i className="bi bi-bag-check-fill"></i><span className="m-2">Orders</span></button>
      <button className="card-title p-3 btn btn-outline-none "  onClick={()=>handleClick('Favourites')} style={{fontSize:'25px'}}><i className="bi bi-heart-fill"></i><span className="m-2">Favourites</span></button>
      <button className="card-title p-3 btn btn-outline-none " onClick={()=>handleClick('Payments')} style={{fontSize:'25px'}}><i className="bi bi-credit-card"></i><span className="m-2">Payments</span></button>
      <button className="card-title p-3 btn btn-outline-none "  onClick={()=>handleClick('Addresses')} style={{fontSize:'25px'}}><i className="bi bi-geo-alt-fill"></i><span className="m-2">Addresses</span></button>
      <button className="card-title p-3 btn btn-outline-none " onClick={()=>handleClick('Settings')} style={{fontSize:'25px'}}><i className="bi bi-gear-fill"></i><span className="m-2">Settings</span></button>
    </div>
  </div>);
}

export default Listofoptions;
