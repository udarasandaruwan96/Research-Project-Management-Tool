import React, { useState } from "react";
import "./UD_SuperSignUp.css";
import SignupImg from "../../assets/signup_right.png";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

// useHistory  = useNavigate
//Redirect = Navigate
const UD_SuperSignup = () => {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SupersignUp = () => {
    var supervisorData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/super/supervisorregister", supervisorData)
      .then((res) => {
        if (res.data.message === "success") {
          // var currentUser = res.data.data;

          // localStorage.setItem("user-info-customer", currentUser);
          navigate("/supervisorlogin");
        } else {
          swal("Sorry", "Registration Failed", "error");
        }
      })
      .catch((error) => {
        swal("Sorry", error.response.data.error, "error");
      });
  };

  return (
    <>
      <div className="superSignupmain">
        <div className="superSignupsignup">
          <div className="superSignupleftSignup"></div>
          <div className="superSignuprightSignup">
            <img src={SignupImg} alt="" className="superSignupsignupTitle" />
            <div className="superSignupsignupform">
              <div className="superSignupinputgroup">
                <div className="inputgroupfirstname">
                  <h3 className="email">First Name</h3>
                  <input
                    type="text"
                    className="firstnameInput"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="superSignupinputgroupsecond">
                  <h3 className="email">Last Name</h3>
                  <input
                    type="text"
                    className="lastnameInput"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <h3 className="address">Address</h3>
              <input
                type="text"
                className="addressInput"
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="superSignupinputgroup">
                <div className="inputgroupfirstname">
                  <h3 className="city">City</h3>
                  <input
                    type="text"
                    className="cityInput"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="superSignupinputgroupsecond">
                  <h3 className="district">PhoneNumber</h3>
                  <input
                    type="text"
                    className="districtInput"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
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

              {/* ........................................... */}
              <h3 className="superSignupsignuplink">
                Already have an account?
                <Link to="/supervisorlogin" className="link">
                  <span>LOGIN</span>
                </Link>
              </h3>
            </div>

            <div className="superSignupbtngroup">
              <button className="superSignupbtn" onClick={SupersignUp}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UD_SuperSignup;
