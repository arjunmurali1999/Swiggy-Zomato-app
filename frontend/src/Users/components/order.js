import React from 'react';

import NoOrder from "../components/NoOrder"
 const Order = ({orders,orderReceived}) => {
  let orderdetail=[]
  let orderamount=0
  if(orders.length>0 )
  {
   return (<React.Fragment>
      <div className="w-75 h-25">
                <h2 className="m-4">Past Orders</h2>
                  {orders.map((order)=>(
                  <div key={order._id} className="card m-4 p-4  h-50 " style={{width: 'auto'}}>
                     <p hidden>{orderamount=0}</p>
                  <div  className="card-body">
                  <div className="d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={order.image} className="img-fluid" style={{height:'100px',width:'100px'}} alt="Restaurant"/>
                  <div className="p-4">
                  <p className="card-title h3">{order.restaurantname}</p>
                  <p className="card-subtitle  text-muted h4">{order.restaurantaddress}</p>
                  </div>
                  </div>
                  <div className="w-25 float-right">
                  <h5 className="text-right mr-1">Ordered on {order.placedat.split(',')[0]}</h5>
                  <h5 className="text-right mr-1">{order.placedat.split(',')[1]}</h5>
                  {order.orderdetail.map(order=>{
                   orderamount=orderamount+(order.amount)*1
                  })}
                  <h4>Total paid</h4>
                  <h5>{`Rs.${orderamount/100}`}</h5>
                 </div>
                  </div>
                  <h3 className="card-text">
                  {orderdetail=(order.orderdetail.map(order=>{
                    return `${order.name}*${order.quantity} `
                  }))}</h3>
                  <button type="button" className="btn btn-danger" onClick={()=>{window.location.href=`/Restaurant/Name/${order.restaurantId}`}}>REORDER</button>
                  <button type="button" className="btn btn-outline-danger m-2">HELP</button>
                  </div>
                  </div>
                  ))}  
               </div>
  </React.Fragment>);
  }
 else if(orders.length===0)
  {
    return <NoOrder></NoOrder> 
  }
  else{
    return (<div className="text-center w-100"></div>)
  }
};
export default Order;