import React, { useState } from "react";
import "./UD_SupervisorLogin.css";
import LoginImg from "../../assets/login_left.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
// import { withSwal } from "react-sweetalert2";

// useHistory  = useNavigate
//Redirect = Navigate

const UD_SupervisorLogin = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SupervisorLogin = () => {
    const supervisor = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/super/supervisorlogin", supervisor)
      .then((res) => {
        if (res.data.message === "success") {
          var currentUser = res.data.data;
          if (currentUser.type === "admin") {
            localStorage.setItem("user-info-admin", currentUser);
            navigate("/dashboard");
          } else {
            localStorage.setItem("user-info-customer", currentUser);
            navigate("/supervisor", { currentUser });
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
      <div className="SupervisorLoginmain">
        <div className="SupervisorLoginlogin">
          <div className="SupervisorLoginleft">
            <img src={LoginImg} alt="" className="SupervisorLoginloginTitle" />
            <div className="SupervisorLoginform">
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
            <div className="SupervisorLoginbtngroup">
              <button className="SupervisorLoginbtn" onClick={SupervisorLogin}>
                Login
              </button>

              {/* ............................... */}
              <h3 className="SupervisorLoginloginlink">
                Don't have an account?
                <Link to="/supervisorsignup" className="link">
                  <span>SIGNUP</span>
                </Link>
              </h3>
            </div>
          </div>
          <div className="SupervisorLoginright"></div>
        </div>
      </div>
    </>
  );
};

export default UD_SupervisorLogin;
