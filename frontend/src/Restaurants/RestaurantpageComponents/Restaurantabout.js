import React from "react";
 import  StyleCSS  from "../css/style.module.css"

const Restaurantabout = ({restaurants}) => {
  return (
    <div>
      {restaurants.map((restaurant)=>(
        <div key={restaurant._id}>
      <div className={`mask mask-custom ${StyleCSS.container_fluid} padding`}>
        <div className="d-flex justify-content-center  p-4">
          <h2 className={`text-light display-5`}>
            We Are the Best Restaurant in {restaurant.city_name}
          </h2>
        </div>
        <div className="d-flex justify-content-center p-4">
          <h3 className="text-light">
            So why are u Waiting Come visit us or Order Online
          </h3>
        </div>
      </div>
      <div className={`${StyleCSS.container}`}>
        <div>
          <h2 className={`p-4 d-flex justify-content-center ${StyleCSS.h2}`}>{restaurant.name}</h2>
        </div>
        <div>
          <h2 id="about" className={StyleCSS.h2}>About Us</h2>
          <p className="text-secondary">
           {restaurant.description}
          </p>
        </div>
      </div>
      </div>
      ))}
    </div>
  );
};
export default Restaurantabout;
