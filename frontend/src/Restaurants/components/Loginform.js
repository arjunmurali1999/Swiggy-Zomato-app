import React from "react";
// import "../css/Registerationform.css"
import axios from "axios";
import { Redirect } from "react-router-dom";
import { authenticate } from "./auth";
import {Link} from 'react-router-dom'
import GoogleLogin from "react-google-login";
const Loginform = () => {
  const [values, setvalues] = React.useState({
    email: "",
    password: "",
    error: "",
    success: false,
    redirect: false,
  });
  const [loginData, setLoginData] = React.useState(
    localStorage.getItem("jwt")
      ? JSON.parse(localStorage.getItem("jwt"))
      : null
  );
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value }); //we get the value from event.target.value
  };
  const login = async (user) => {
    try {
      const data = await axios.post(
        "http://localhost:3002/api/ver1/users/login",
        { ...user }
      );
      const name = data.data.data.user.name;
      const email=data.data.data.user.email;
      authenticate(data.data.token, name,email ,() => {
        setvalues({
          ...values,
          email: "",
          password: "",
          error: false,
          success: true,
          redirect: true,
        });
      });
    } catch (error) {
      setvalues({
        ...values,
        error: error.response.data.message,
        success: false,
      });
    }
  };
  const { email, password, success, error, redirect } = values;
  const clickSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false });
    login({ email, password });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      You have logged in successfully
      {redirectuser()}
    </div>
  );
  const redirectuser = () => {
    if (redirect) {
      return <Redirect to="/" />;
    }
  };
  const handleFailure = (result) => {
    // alert(result);
  };
  const handleLogin = async (googleData) => {
    const res = await axios.post("http://localhost:3002/api/ver1/users/google-login", {
      token: googleData.tokenId,
    });
    const name=res.data.data.user.name
    const data = res.data;
    setLoginData(data.token);
    localStorage.setItem("jwt", JSON.stringify(data.token));
    localStorage.setItem("name", JSON.stringify(name));
    setvalues({...values,success:true,redirect:true})
    showSuccess()
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#ff6666" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">SIGN IN</h3>
                  {showError()}
                  {showSuccess()}
                  <div className="form-outline mb-4">
                    <label className="form-label float-left" htmlFor="typeEmailX-2">
                      {" "}
                      Please Enter your Email
                    </label>
                    <input
                      onChange={handleChange("email")}
                      type="email"
                      value={email}
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-left"
                      htmlFor="typePasswordX-2"
                    >
                      {" "}
                      Please Enter your Password
                    </label>
                    <input
                      onChange={handleChange("password")}
                      type="password"
                      value={password}
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="form1Example3"
                    />
                    <label
                      className="form-check-label pr-2"
                      htmlFor="form1Example3"
                    >
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-end mb-4">
                   <Link to="/forgot-password">Forgot Password</Link>
                  </div>
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    onClick={clickSubmit}
                    type="submit"
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                  ></GoogleLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Loginform;
