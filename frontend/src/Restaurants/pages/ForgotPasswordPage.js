import React from "react";
import { useState, useEffect } from "react";
import {Redirect} from 'react-router-dom'
import axios from "axios";
function ForgotPasswordPage() {
  const [email, setEmail] = useState();
  const [click, setClick] = useState(false);
  const [process,setProcess] = useState(false)
  const [status, setStatus] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    if(!email)
    {
      return alert("please enter your emailId")
    }
    setProcess(true)
    setClick(true);
  };
  useEffect(() => {
    if (click) {
      const fetchResponse = async () => {
        const response = await axios.post(
          ` http://127.0.0.1:3002/api/ver1/users/forgotpassword`,
          { email }
        );
        setStatus(response.data);
      };
      fetchResponse();
      setProcess(false)
    }
  }, [click])
  if(status)
  {
   return <Redirect to={'/forgot-password/success'}/>
  }
  return (
    <div className="d-flex justify-content-center m-4">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Don't Worry</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            please type your mail id
          </h6>
          <form>
            <div className="m-2">
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email ? email : ""}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="m-2">
              <button
                className="btn btn-secondary"
                type="submit"
                onClick={handleClick} disabled={process?true:false}>
                {process?'processing':'Click'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
