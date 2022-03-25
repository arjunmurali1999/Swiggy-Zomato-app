import React from 'react';
import {useLocation} from 'react-router-dom'
import {Orderbooking} from "../components/Orderbooking"
import {Redirect} from 'react-router-dom'

 const Successpage = () => {
  const search =useLocation().search
  const [redirect,setRedirect]=React.useState(false)
   React.useEffect(()=>{
    let queryStringfull=new URLSearchParams(search).toString().split('%3F')
    let queryString=queryStringfull[0].split('&')
    Orderbooking(queryString,queryStringfull[1])
   },[])
  const name=JSON.parse(localStorage.getItem('name')).split(" ")[0].toUpperCase();
  React.useEffect(()=>{
    window.setTimeout(()=>{
      setRedirect(true)
    },2000)
  })
  if(redirect)
  {
    return <Redirect to={`/account/${name}`}></Redirect>
  }
  return (
  <div>
  <div className="d-flex justify-content-center mt-4">
    <div className="card ">
      <div className="card-body text-center ">
        <h3 className="card-title p-3 text-success">Payment is Successfull</h3>
        <h6 className="card-subtitle mb-2 text-muted p-2">Thank you for Ordering</h6>
        <img src="/images/assets/preparing_order.jpg" style={{height:'300px',width:'300px'}} alt="preparing order"/>
        <p className="card-text p-2">Please wait your delicious food is preparing</p>
        <a href={`/account/${name}`} className="card-link">Redirecting to Dashboard...</a>
      </div>
    </div>
  </div>
  </div>);
};

export default Successpage;