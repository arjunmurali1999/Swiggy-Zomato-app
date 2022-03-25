import React from "react";
import NoAddress from "./NoAddress"
import UpdateUser from './updateUser'
const Address = ({width,orders}) => {
  let address
   if(orders.length>0 )
  {
    return (
      <div className={`${width?`w-100`:`w-25`} h-100`}>
        <h2 className="m-4">Manage Addresses</h2>
        {orders.map((order,i)=>
        { if(i===orders.length-1)
          { return (<div  key={order._id} className="card m-4 p-4" style={{ width: "auto" }}>
            <div className="card-body">
              <div className="d-flex">
                <i className="bi bi-house-door-fill"></i>
                <div className="m-2">
                  <h3>Home</h3>
                  <h4 className="text-secondary">{order.address.line1>order.address.line2?address=UpdateUser(order.address.line1):address=UpdateUser(order.address.line2)}</h4>
                  <div className="d-flex">
                    <button className="text-danger p-2  btn btn-lg ">EDIT </button>
                    <button className="text-danger p-2 btn btn-lg">DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
   } )}
      </div>
    );
  }
  else if(orders.length===0 )
  {
    return <NoAddress width={width}></NoAddress>
  }
  else return <div></div>
};
export default Address;
