import React, { useState } from "react";
import "./UD_AddPenalmember.css";
import swal from "sweetalert";
import axios from "axios";
import validator from "validator"; //validation email

const UD_AddPenalmember = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const valid = validator.isEmail(email); //validation email

  const managePenalmember = () => {
    const penalmember = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    if (phoneNumber.length < 10 || phoneNumber.length > 10 || phoneNumber < 0) {
      swal("Error", "Invalid Phone Number", "error"); //validation PhoneNumber
      return;
    }

    if (!valid) {
      swal("Error", "Invalid Email", "error"); //validation email
      return;
    }

    axios
      .post("http://localhost:5000/penal/penalmemberregister", penalmember)
      .then((res) => {
        if (res.data.message === "success") {
          console.log(res.data);
          swal("Success", "Penalmember genarate successfully", "success");
        } else {
          console.log(res.data);
          swal("Error", "Penalmember genarate unsuccessfully", "error");
        }
      })

      .catch((error) => {
        try {
          swal("Error", error.response.data.msg, "error");
        } catch (error) {
          swal(
            "Error",
            "Server error Please Cheak Phone Number (Can't used lettering) or Email  (Can't used same Email) ", //validation
            "error"
          );
        }
      });
  };

  return (
    <>
      <div className="ud_add_Penalmeber_Form1">
        <div className="ud_add_Penalmeber_title"> Add Penalmember Details</div>

        <form className="ud_add_Penalmeber_form2">
          <label className="ud_add_Penalmeber_name1">
            <b>FirstName</b>
          </label>
          <br></br>
          <input
            className="ud_add_Penalmeber_box1"
            type="text"
            value={firstName}
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br></br>

          <label className="ud_add_Penalmeber_name2">
            <b>LastName</b>
          </label>
          <input
            className="ud_add_Penalmeber_box2"
            type="text"
            value={lastName}
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label className="ud_add_Penalmeber_name3">
            <b>Address</b>
          </label>
          <input
            className="ud_add_Penalmeber_box3"
            type="text"
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br></br>
          <label className="ud_add_Penalmeber_name4">
            <b>City</b>
          </label>
          <input
            className="ud_add_Penalmeber_box4"
            type="text"
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br></br>
          <label className="ud_add_Penalmeber_name7">
            <b>PhoneNumber</b>
          </label>
          <input
            className="ud_add_Penalmeber_box7"
            type="text"
            value={phoneNumber}
            required
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <label className="ud_add_Penalmeber_name5">
            <b>Email</b>
          </label>
          <input
            className="ud_add_Penalmeber_box5"
            type="text"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <label className="ud_add_Penalmeber_name6">
            <b>Password</b>
          </label>
          <br></br>
          <input
            className="ud_add_Penalmeber_box6"
            type="text"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>
        </form>

        <button
          className="ud_add_Penalmeber_Savebutton"
          onClick={managePenalmember}
        >
          Save
        </button>

        <div
          onClick={() => props.onClick("managePenalmember")}
          className="ud_add_Penalmeber_Backbutton"
        >
          Cancel
        </div>
      </div>
    </>
  );
};

export default UD_AddPenalmember;
