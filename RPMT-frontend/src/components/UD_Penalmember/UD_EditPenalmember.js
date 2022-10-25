import React, { useState } from "react";
import "./UD_EditPenalmember.css";
import swal from "sweetalert";
import axios from "axios";
import validator from "validator"; //validation email

const UD_EditPenalmember = ({ onClick, id, formData }) => {
  const [firstName, setFirstName] = useState(formData.firstName);
  const [lastName, setLastName] = useState(formData.lastName);
  const [address, setAddress] = useState(formData.address);
  const [city, setCity] = useState(formData.city);
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber);
  const [email, setEmail] = useState(formData.email);
  const [password, setPassword] = useState(formData.password);

  const valid = validator.isEmail(email); //validation email

  const EditPenalmember = () => {
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
      .post(`http://localhost:5000/penal/penalmemberregister${id}`, penalmember)
      .then((res) => {
        if (res.data.message === "success") {
          setFirstName("");
          setLastName("");
          setAddress("");
          setCity("");
          setPhoneNumber("");
          setEmail("");
          setPassword("");

          swal("Success", "Edit Success", "success");

          return onClick();
        } else {
          swal("Sorry", " edit failed", "error");
        }
      })
      .catch((error) => {
        swal("Sorry", "edit failed", "error");
      });
  };

  return (
    <>
      <div className="ud_edit_Penalmeber_Form1">
        <div className="ud_edit_Penalmeber_title">
          {" "}
          Edit Penalmember Details
        </div>

        <div className="ud_edit_Penalmeber_form2">
          <div type="text" value={formData.Id} disabled="true" />

          <label className="ud_edit_Penalmeber_name1">
            <b>FirstName</b>
          </label>
          <br></br>
          <input
            className="ud_edit_Penalmeber_box1"
            type="text"
            value={firstName}
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br></br>

          <label className="ud_edit_Penalmeber_name2">
            <b>LastName</b>
          </label>
          <input
            className="ud_edit_Penalmeber_box2"
            type="text"
            value={lastName}
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label className="ud_edit_Penalmeber_name3">
            <b>Address</b>
          </label>
          <input
            className="ud_edit_Penalmeber_box3"
            type="text"
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br></br>
          <label className="ud_edit_Penalmeber_name4">
            <b>City</b>
          </label>
          <input
            className="ud_edit_Penalmeber_box4"
            type="text"
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br></br>
          <label className="ud_edit_Penalmeber_name7">
            <b>PhoneNumber</b>
          </label>
          <input
            className="ud_edit_Penalmeber_box7"
            type="text"
            value={phoneNumber}
            required
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <label className="ud_edit_Penalmeber_name5">
            <b>EMAIL</b>
          </label>
          <input
            className="ud_edit_Penalmeber_box5"
            type="text"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <label className="ud_edit_Penalmeber_name6">
            <b>Password</b>
          </label>
          <br></br>
          <input
            className="ud_edit_Penalmeber_box6"
            type="text"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>
        </div>

        <button
          className="ud_edit_Penalmeber_Savebutton"
          onClick={EditPenalmember}
        >
          Save
        </button>

        <button className="ud_edit_Penalmeber_Backbutton" onClick={onClick}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default UD_EditPenalmember;
