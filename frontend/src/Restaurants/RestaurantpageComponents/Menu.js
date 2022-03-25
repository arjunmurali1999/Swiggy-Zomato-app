import React from "react";
import Menucard from "./menucard"
import  StyleCSS  from "../css/style.module.css"
const Menu = () => {
  const [dishname,setdishname]=React.useState([])

    const dishes=(data)=>{
      setdishname(data) 
    }
  return (
    <div className={`${StyleCSS.container}`}>
        <div className="pt-4 pb-4 ">
         <h2 className={StyleCSS.h2}>The Best Dishes</h2>
         {dishname.map((dish,i)=>(
             <div key={dish._id}>
            {i<2 && <h5 className={`pt-2 ${StyleCSS.h2}`}>{dish.name}</h5>}
            {i<2 && <img src={`/images/${dish.image}`} className="rounded-circle" style={{height:"200px",width:"200px"}} alt="dish "/>}
            {i<2 && <p>{dish.description}</p>}
            </div>
         ))}
         </div>
      <div className=" pb-3">
        <h4 className={`pt-2 ${StyleCSS.h2}`}>Visit our Exclusive Menu options and order</h4>
      </div>
      <Menucard dishes={dishes}></Menucard>
    </div>
  );
};

export default Menu;
