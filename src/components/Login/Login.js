import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const GoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="text-center mt-5 form ">
      <div className="login-form">
        <h1 className="form-title">PLEASE LOGIN</h1>
        <form className="form-container">
          <input type="email" placeholder="Your Email" required />
          <br />
          <input type="password" placeholder="Your Password" required />
          <input type="submit" value="Login" className="form-login-btn" />
        </form>
        <div>
          <h3>Or Login With</h3>
          <div>
            <button className="sing-in-btn" onClick={GoogleLogin}>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
