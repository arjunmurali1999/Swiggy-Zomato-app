import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {isAuthenticated} from '../../Restaurants/components/auth'
function Settings() {
  const [update, setUpdate] = useState(false);
  const token=isAuthenticated()
  const [data,setData] = useState()
  const [formData, setFormData] = useState({
    name: JSON.parse(localStorage.getItem("name")),
    address: "",
  });
  useEffect(() => {
    if (update) {
      const updateUser = async (data) => {
        const response = await axios.put(
          "http://localhost:3002/api/ver1/users",data,{headers:{Authorization:`Bearer ${token}`}},
        );
        return response.data;
      };
      data?updateUser(data):updateUser();
    }
  }, [update]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleClick = () => {
    if(formData.name!=="")
    {
      setData({name:formData.name})
    }if(formData.address!=="")
    {
      setData({address:formData.address})
    }
    console.log(data)
    setUpdate(update=>!update);
  };
  const { name, address } = formData;
  return (
    <>
      <div className=" w-100 h-100">
        <div className="d-flex justify-content-center">
          <img src="/images/assets/profile.gif" className="w-50 h-50" />
        </div>
        <div className="d-flex justify-content-center w-100 h-100">
          <button
            type="button"
            className="btn btn-secondary  btn-lg btn-block"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Edit Profile
          </button>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLongTitle">
                    Edit your Profile Information
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group m-2">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="name"
                        id="name"
                        value={name ? name : ""}
                        required
                      />
                    </div>
                    <div className="form-group m-2">
                      <input
                        type="text-area"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="address"
                        id="address"
                        value={address ? address : ""}
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={handleClick}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
