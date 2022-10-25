import React, { useState } from "react";
import "./UD_Login.css";
import LoginImg from "../../assets/login_left.png";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import axios from "axios";
import swal from "sweetalert";
// useHistory  = useNavigate,
//Redirect = Navigate
// const navigate = useNavigate();
// navigate("/home");


const UD_Login = () => {
  let navigate = useNavigate();
  //let history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/auth/login", user)
      .then((res) => {
        if (res.data.message === "success") {
          var currentUser = res.data.data;
          if (currentUser.type === "admin") {
            localStorage.setItem("user-info-admin", currentUser);
            //history.push("/dashboard");
            navigate("/dashboard");
          } else {
            localStorage.setItem("user-info-customer", currentUser);
            // history.push("/stdHome", { currentUser });
            navigate("/stdHome", { currentUser });
          }
        } else {
          swal("Sorry", "Login Failed", "error");
        }
      })
      .catch((error) => {
        swal("Sorry", error.response.data.error, "error");
      });
  };

  return (
    <>
      <div className="UDSDmain">
        <div className="UDSDlogin">
          <div className="UDSDleft">
            <img src={LoginImg} alt="" className="UDSDloginTitle" />
            <div className="UDSDform">
              <h3 className="email">Email</h3>
              <input
                type="text"
                className="emailInput"
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="password">Password</h3>
              <input
                type="password"
                className="passwordInput"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="UDSDbtngroup">
              <button className="UDSDbtn" onClick={Login}>
                Login
              </button>
              <h3 className="UDSDloginlink">
                Don't have an account?
                <Link to="/signup" className="link">
                  <span>SIGNUP</span>
                </Link>
              </h3>
            </div>
          </div>
          <div className="UDSDright"></div>
        </div>
      </div>
    </>
  );
};

export default UD_Login;
