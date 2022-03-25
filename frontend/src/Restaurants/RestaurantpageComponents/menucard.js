import React from "react";
import { useParams } from "react-router-dom";
import {isAuthenticated} from "../components/auth"
import {useStripe} from '@stripe/react-stripe-js'
import axios from "axios";
const Menucard = ({ dishes }) => {
  const stripe=useStripe()
  const { id } = useParams();
  const [menu, setmenu] = React.useState([]);
  const [Restaurant, setRestaurant] = React.useState([]);
  const [total, settotal] = React.useState(0);
  const [iconchange,seticonchange]=React.useState(false)
  const [paymentprocess,setpaymentprocess]=React.useState(false)
  const cookie_value=JSON.parse(localStorage.getItem('jwt'))
  const handleClick = () => {
    return id;
  };
  React.useEffect(() => {
    const fetchmenu = async () => {
      const data = await axios.get(
        "http://127.0.0.1:3002/api/ver1/restaurant/menu",
        { params: { id: id } }
      );
      setmenu(data.data);
    };
    fetchmenu();
  }, [id]);
  React.useEffect(() => {
    const fetchresname = async () => {
      const res = await axios.get(
        `http://localhost:3002/api/ver1/restaurant/${id}`
      );
      setRestaurant(res.data);
    };
    fetchresname();
  }, [id]);

    const payment = async (billedqty) => {
      
      const res = await axios.post(
        `http://localhost:3002/api/ver1/users/checkout`
      ,{
        amount:total,
        dishes:billedqty,
        id,
      },{headers: {Authorization: `Bearer ${cookie_value}`}});
      const sessionId=res.data.session.id
      const {error}=await stripe.redirectToCheckout({
        sessionId
      })
       setpaymentprocess(false)
      if(error)
      {
        return res.status(400).send(`webhook error ${error.message}`);
      }
      
    };
    
  
  dishes(menu);
  const operationQty = (i, operation) => {
    let subtotal = 0;
    let items = [...menu];
    let item = items[i];
    if (operation === "add") {
      item.qty += 1;
    } else if (item.qty > 0) {
      item.qty -= 1;
    }
    items[i] = item;
    items.map(item =>{
      return  subtotal += item.qty * item.price;
    })
    settotal(subtotal);
    setmenu(items);
  };
  const handleiconchange=(i)=>{
    seticonchange(prev=>!prev)
  }
const handleRedirect=()=>{
  alert("Please login to make payment")
  window.location.href="/signup"
}
const handlepayment=()=>{
const billedqty=menu.filter((item)=>{
    return item.qty>0
  })
  const line_items=billedqty.map(item=>{
    return{
      quantity:item.qty,
        currency:'inr',
        amount:item.price*100,
        name:item.name,
        description:item.description,
        images:[item.image],   
    }
  })
  setpaymentprocess(true)
  payment(line_items)
}
  return (
    <div className="pb-3">
      <button
        type="button"
        id="menu"
        onClick={handleClick}
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Menu
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ height: "auto", width: "auto" }}
          >
            <div className="modal-header">
              {Restaurant.map((restaurant) => (
                <h4
                  key={restaurant._id}
                  className="modal-title"
                  id="exampleModalLabel"style={{fontFamily: "Lobster"}}
                >
                  {restaurant.name} Menu
                </h4>
              ))}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {menu.map((items, i) => (
              <div className="modal-body" key={items._id}>
                <div className={`food-card food-card--vertical`}>
                  <div className={`food-card_img} p-1`}>
                    <img
                      src={`/images/${items.image}`}
                      alt=""
                      style={{ width: "200px", height: "200px" }}
                    />
                    <a href="#!" onClick={()=>handleiconchange(i)} style={{ position: "absolute", left: "25px" }}>
                      {iconchange?<i className="fa fa-heart"></i>:<i className="far fa-heart"></i>}
                    </a>
                  </div>
                  <div className={`food-card_content`}>
                    <div className="food-card_title-section pt-2">
                      <h6 className="food-card_title" style={{fontFamily: "Lobster"}}>{items.name}</h6>
                    </div>
                    <div className="space-between">
                      <p style={{ color: "#8a8a5c" }}>{items.description}</p>
                    </div>
                    <div className="food-card_bottom-section">
                      <hr />
                      <div className="space-between m-1">
                        <div className="food-card_price">
                          <span className="h5">{items.price}₹</span>
                        </div>
                        <div className="food-card_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn btn-sm"
                                type="button"
                                onClick={() => operationQty(i, "minus")}
                                id="button-addon1"
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            {/* <input
                            type="text"
                            className="form-control input-manulator"
                            placeholder="0"
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"/> */}
                            <div>
                              <p className="form-control input-manulator">
                                {items.qty}
                              </p>
                            </div>
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn btn-sm"
                                type="button"
                                onClick={() => operationQty(i, "add")}
                                id="button-addon1"
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="modal-footer">
              {total>0 && <h5>Subtotal :{total}</h5>}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              {total===0 &&<button type="button" className="btn btn-danger"disabled>
                Pay Now
              </button>}
              {(total>0 && isAuthenticated()) &&<button type="button" onClick={handlepayment} className="btn btn-danger">
                {paymentprocess? 'Processing...':'Pay Now'}
              </button>}
              {(total>0 && !isAuthenticated()) &&<button type="button" onClick={handleRedirect} className="btn btn-danger">
                Pay Now 
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
