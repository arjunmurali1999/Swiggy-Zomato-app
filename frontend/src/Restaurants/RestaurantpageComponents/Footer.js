/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import StyleCSS from "../css/style.module.css";
import validation from "./Tablebookingvalidation"
import {TableBooking} from "../../Restaurants/components/Orderbooking"
import {Redirect} from 'react-router-dom'
const Footer = ({restaurants}) => {
  const [redirect,setRedirect]=React.useState(false)
  const [order,setOrder]=React.useState()
  const [tableBookingDetails,setTableBookingDetails]=React.useState({
    name:"",
    email:"",
    phone:undefined,
    date:undefined,
    time:undefined,
    people:"",
    message:"",
    error:false,
    restaurant:restaurants[0].name
  })
  const [formErrors,setFormErrors]=React.useState({
    name:undefined,
    email:undefined,
    phone:undefined,
    date:undefined,
    time:undefined,
    people:undefined,
  })
  const handleChange=(name)=>(event)=>{
   setTableBookingDetails({...tableBookingDetails,[name]:event.target.value})
  }
  const {name,email,phone,date,time,people,message}=tableBookingDetails
  const handleClick=async(e)=>{
    let orders
    e.preventDefault()
    const error=validation({...tableBookingDetails})
    setFormErrors(error)
    if(error.present)
    {
      return
    }
    else{
        orders=await TableBooking(tableBookingDetails)
        setOrder(orders)
      }
    if(orders.success==="success")
    {
      setRedirect(true)  
    }
  }
  if(redirect)
  {
    
    return <Redirect to={{pathname:"/tablebooking/success",state:order}}></Redirect>
  }
 const showErrors=(error)=>{
   return (<div className="alert alert-danger">
   {error}
  </div>)
 }
  return (
    <div className={StyleCSS.container}>
      <div className={`${StyleCSS.container}pt-4" data-aos="fade-up`}>
        <div className="row">
          <div className="col-md-8 ">
            <h2 className={`text-dark ${StyleCSS.h2}`}>
              Want to Enjoy food with Family{" "}
            </h2>
            <p className={`mb-5 ${StyleCSS.h2}`}>
              Why waiting Book a table Directly
            </p>
          </div>
        </div>
        <form>
          <div className="form-row">
            <div className="col-lg-4 col-md-6 form-group p-2">
              <input
                type="text"
                name="name"
                value={name?name:""}
                onChange={handleChange('name')}
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
              {formErrors.name&&showErrors(formErrors.name)}
            </div>
            <div className="col-lg-4 col-md-6 form-group p-2">
              <input
                type="email"
                className="form-control"
                name="email"
                value={email?email:""}
                id="email"
                onChange={handleChange('email')}
                placeholder="Your Email"
               />
               {formErrors.email&&showErrors(formErrors.email)}
            </div>
            <div className="col-lg-4 col-md-6 form-group p-2">
              <input
                type="number"
                className="form-control"
                name="phone"
                value={phone?phone:""}
                id="phone"
                onChange={handleChange('phone')}
                placeholder="Your Phone"
              />
              {formErrors.phone&&showErrors(formErrors.phone)}
            </div>
            <div className="col-lg-4 col-md-6 form-group p-2">
              <input
                type="date"
                name="date"
                value={date?date:""}
                className="form-control"
                id="date"
                onChange={handleChange('date')}
                placeholder="Date"
              />
              {formErrors.date&&showErrors(formErrors.date)}
            </div>
            <div className="col-lg-4 col-md-6 form-group p-2">
              <input
                type="time"
                className="form-control"
                name="time"
                value={time?time:""}
                id="time"
                onChange={handleChange('time')}
                placeholder="Time"
              />
              {formErrors.time&&showErrors(formErrors.time)}
            </div>
            <div className="col-lg-4 col-md-6 form-group p-2">
              <input
                type="number"
                className="form-control"
                name="people"
                value={people?people:""}
                id="people"
                onChange={handleChange('people')}
                placeholder="No. of people"
                min="0"
              />
              {formErrors.people&&showErrors(formErrors.people)}
            </div>
          </div>
          <div className="form-group p-2">
            <textarea
              className="form-control"
              name="message"
              value={message?message:""}
              onChange={handleChange('message')}
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-secondary float-right mt-3 m-2" onClick={handleClick}
          >
            Book a Table
          </button>
        </form>
      </div>
      <footer className="page-footer font-small cyan darken-3 bg-light p-4">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <a className="fb-ic p-2">
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="tw-ic p-2">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="gplus-ic p-2">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="li-ic p-2">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="ins-ic p-2">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="pin-ic p-2">
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © Copyright:
          <a href="#"> Arjun Murali</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
