import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./UD_Penalmember.css";
import axios from "axios";
import Sug_panelmembers_page from "../sug_panelmembers_page/sug_panelmembers_page"

const UD_Penalmember = ({ location }) => {
 

  return (
    <div>  <Sug_panelmembers_page/> 
    <div className="panelmembersHomesug">
      <h1>Welcome To the Panel</h1>
    </div>
    </div>


   
  );
};

export default UD_Penalmember;
