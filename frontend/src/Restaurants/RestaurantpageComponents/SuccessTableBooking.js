import React from "react";
import {Link} from 'react-router-dom'
function SuccessTableBooking(props) {
  const bookingDetails=props.location.state
  return (
    <div className="m-4">
      <div className="d-flex justify-content-center mt-4">
        <div className="card ">
          <div className="card-body text-center ">
            <h3 className="card-title p-3 text-success">
              Booking is successfull
            </h3>
            <h6 className="card-subtitle mb-2 text-muted p-2">
              Thank you for Booking in One of our premium Restaurants <h5 className="text-dark pt-3">{bookingDetails.restaurant}</h5>
            </h6>
            <img
              src="/images/assets/restaurant.gif"
              style={{ height: "300px", width: "300px" }}
              alt="preparing order"
            />
            <div>
             <p className="card-text p-2">
              Please check your <span className="text-dark">{bookingDetails.email}</span> which contains order receipt 
            </p>
            <p className="card-text p-2">
              Enjoy the Dining Experience with your family
            </p>
            </div>
            <Link to={`/`} className="card-link"><i className="bi bi-house-heart-fill"></i>Homepage</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessTableBooking;
