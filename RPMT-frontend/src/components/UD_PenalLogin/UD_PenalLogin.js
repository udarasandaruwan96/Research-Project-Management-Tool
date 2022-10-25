import React, { useState } from "react";
import "./UD_PenalLogin.css";
import LoginImg from "../../assets/login_left.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// useHistory  = useNavigate
//Redirect = Navigate

const UD_PenalLogin = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PenalLogin = () => {
    const penalmember = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/penal/penalmemberlogin", penalmember)
      .then((res) => {
        if (res.data.message === "success") {
          var currentUser = res.data.data;
          if (currentUser.type === "admin") {
            localStorage.setItem("user-info-admin", currentUser);
            navigate("/dashboard");
          } else {
            localStorage.setItem("user-info-customer", currentUser);
            navigate("/penalmember", { currentUser });
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
      <div className="PenalLoginmain">
        <div className="PenalLoginlogin">
          <div className="PenalLoginleft">
            <img src={LoginImg} alt="" className="PenalLoginloginTitle" />
            <div className="PenalLoginform">
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
            <div className="PenalLoginbtngroup">
              <button className="PenalLoginbtn" onClick={PenalLogin}>
                Login
              </button>

              {/* ................navigate.................................. */}
              <h3 className="PenalLoginloginlink">
                Don't have an account?
                <Link to="/penalmembersignup" className="link">
                  <span>SIGNUP</span>
                </Link>
              </h3>
            </div>
          </div>
          <div className="PenalLoginright"></div>
        </div>
      </div>
    </>
  );
};

export default UD_PenalLogin;
