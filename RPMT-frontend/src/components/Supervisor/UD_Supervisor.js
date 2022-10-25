import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./UD_Supervisor.css";
import axios from "axios";
import Sug_supervioser_page from "../sug_supervisor_page/sug_supervisor_page"

const UD_Supervisor = ({ location }) => {
  
  return (
    <div><Sug_supervioser_page/>
    <div className="supervisorsHomesug">
      <h1>Welcome Supervisors</h1>
    </div></div>

  )
};

export default UD_Supervisor;
