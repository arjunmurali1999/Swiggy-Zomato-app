import React from 'react'
import {Link} from 'react-router-dom'
function passwordSuccess() {
  return (
    <div className="d-flex justify-content-center m-4">
    <div className="card">
     <div className="card-body">
       <h5 className="card-title text-center">Email sent</h5>
       <img src="/images/assets/mail.gif" className="img-fluid m-4"/>
       <h6 className="card-subtitle mb-2 text-muted text-center">
         please Check your email it contains the reset url
       </h6>
       <div className="text-center">
       <Link to={`/`} className="card-link"><i className="bi bi-house-heart-fill"></i>Homepage</Link>
       </div>
     </div>
   </div>
 </div>
  )
}

export default passwordSuccess