import React from "react";
import {signout} from "./auth"
import {Link} from "react-router-dom"
import {isAuthenticated} from "./auth"
function Homepagenav({name,width,account}) {
  const handleAccount=()=>{
    window.location.href=`/account/${JSON.parse(localStorage.getItem('name')).split(" ")[0].toUpperCase()}`
  }
 const textSize={
   fontSize:'13px'
 }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger pr-4">
        <div
          className="collapse navbar-collapse d-flex justify-content-between mr-4  "
          id="navbarSupportedContent"> 
          <div><Link to="/"><button className="btn btn-danger rounded-circle btn-sm"><h3 className="text-danger bg-light shadow  rounded-circle text-center h-100 w-100 p-2" id="logo"  >e!</h3></button></Link></div>
          <ul className="navbar-nav mr-auto">
            {(!isAuthenticated()&&!account) && (
              <div className="d-flex">
               <li className="nav-item active p-2 mr-4">
              <button type="button" className="btn btn-outline-none">
                <Link className="nav-link text-light" style={!width?textSize:{}} to="/login">
                  <i className="fas fa-user" >Login</i>
                </Link>
              </button>
            </li>
            <li className="nav-item p-2 mr-4 ">
              <button type="button" className="btn btn-outline-light">
                <Link className="nav-link text-light" style={!width?textSize:{}} to="/signup">
                  <i className="fas fa-user">Sign up</i>
                </Link>
              </button>
            </li>
              </div>
            )}
            {(isAuthenticated()&&!account) && (
              <div className="d-flex">
                <li className="nav-item p-2 mr-4 ">
              <button type="button" onClick={handleAccount} className="btn btn-outline-none">
                <span className="nav-link text-light" style={!width?textSize:{}}>
                <i className="fas fa-user-shield">{JSON.parse(localStorage.getItem('name')).split(" ")[0].toUpperCase()}</i>
                </span>
              </button>
               </li>
                <li className="nav-item p-2 mr-4  ">
              <button type="button" className="btn btn-outline-light">
                <span className="nav-link text-light" style={!width?textSize:{}} onClick={()=>signout(()=><Link to="/" />, window.location.reload(true))}>
                  <i className="fas fa-user">Sign out</i>
                </span>
              </button>
            </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Homepagenav;
