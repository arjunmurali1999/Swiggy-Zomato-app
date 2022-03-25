/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import StyleCSS from "../css/style.module.css";
import { signout } from "../components/auth";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../components/auth";
import ButtonToggle from "./ButtonToggle"
const Restaurantnav = ({name,width}) => {
  const handleClick=()=>{
   window.location.href=`/account/${name}`
  }
  const textSize={
    fontSize:'13px'
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger  p-4">
        <div className="container d-flex w-100 justify-content-between">
          <div className="d-flex">
          <div>
          {(width||!isAuthenticated()) &&<a className="navbar-brand text-light d-flex pl-4" href="#">
            <i className={`fas fa-phone-square-alt mr-1 ${StyleCSS.i}`}></i>
            <h4>Order Now</h4>
          </a>}
          </div>
          <div>
          { width && <ButtonToggle></ButtonToggle>}
          </div>
          </div>
          <div>
          {isAuthenticated() && (
                <div className=" d-flex justify-content-between  w-100">
                  <div className="nav-item p-2 mr-4" >
                    <button type="button" onClick={handleClick} className="btn btn-outline-none btn-sm">
                      <span className="nav-link text-light" style={!width?textSize:{}}>
                        <i className="fas fa-user-shield">
                          {name}
                        </i>
                      </span>
                    </button>
                  </div>
                  <div className="nav-item p-2 mr-4 ">
                    <button type="button" className="btn btn-outline-light btn-sm">
                      <span
                        className="nav-link text-light"
                        onClick={() =>
                          signout(
                            () => (
                              (<Redirect to="/" />),
                              window.location.reload(true)
                            )
                          )
                        }>
                        <i className="fas fa-user">Sign out</i>
                      </span>
                    </button>
                  </div>
                </div>
              )}
           </div>
        </div>
      </nav>
    </div>
  );
};
export default Restaurantnav;
