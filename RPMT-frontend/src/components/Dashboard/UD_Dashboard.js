import React, { useState } from "react";
import "./UD_Dashboard.css";
import { Navigate, useNavigate } from "react-router-dom";
import UD_HomeStudent from "../UD_Student/UD_HomeStudent";
import UD_HomePenalmember from "../UD_Penalmember/UD_HomePenalmember";
import UD_HomeSupervisor from "../UD_Supervisor/UD_HomeSupervisor";
import Shv_admin_notice_home from "../shv_submission_notices/shv_admin_notice_home";
import Shv_admin_marking_home from "../shv_rs_admin_marking_scheme/shv_admin_marking_home";
import Shv_admin_template_home from "../shv_rs_admin_templates/shv_admin_template_home";
import Sug_Admin_manage_panel from "../sug_admin_manage_panel/sug_admin_manage_panel";

// useHistory  = useNavigate,
//Redirect = Navigate,NavLink

const UD_Dashboard = ({ authorized }) => {
  const [component, setComponent] = useState("production");
  //let history = useNavigate();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user-info-admin");
    //history.push("/");
    navigate("/");
  };

  if (!localStorage.getItem("user-info-admin")) {
    return <Navigate to="/" />;
  }
  return (
    <div className="UDDdashboardMain">
      <div className="UDDleftLinks">
        <div className="UDDphotogroup">
          <div className="UDDphoto"></div>
          <h1 className="UDDprofileName">admin</h1>
        </div>
        <div className="UDDdashLinks">
          <ul className="UDDlinks">
            <li
              onClick={() => {
                setComponent("student");
              }}
              className="UDDlink"
              id={component === "student" ? "active" : ""}
            >
              Student Management
            </li>
            <li
              onClick={() => {
                setComponent("penalmember");
              }}
              className="UDDlink"
              id={component === "penalmember" ? "active" : ""}
            >
              Penalmember Management
            </li>
            <li
              onClick={() => {
                setComponent("supervisor");
              }}
              className="UDDlink"
              id={component === "supervisor" ? "active" : ""}
            >
              Supervisor Management
            </li>
            <li
              onClick={() => {
                setComponent("adminNotice");
              }}
              className="UDDlink"
              id={component === "adminNotice" ? "active" : ""}
            >
              Notice Management
            </li>
            <li
              onClick={() => {
                setComponent("adminMarking");
              }}
              className="UDDlink"
              id={component === "adminMarking" ? "active" : ""}
            >
              Marking Schemes Management
            </li>
            <li
              onClick={() => {
                setComponent("adminTemplates");
              }}
              className="UDDlink"
              id={component === "adminTemplates" ? "active" : ""}
            >
              Templates Submission
            </li>
            <li
              onClick={() => {
                setComponent("adminPanelManagement");
              }}
              className="UDDlink"
              id={component === "adminPanelManagement" ? "active" : ""}
            >  Panel Management
            </li>

          </ul>
        </div><br/><br/>
        <div className="UDDlgoutbtn" onClick={logout}>
          LOGOUT
        </div>
      </div>
      <div className="UDDhero">
        {component === "student" && <UD_HomeStudent />}
        {component === "penalmember" && <UD_HomePenalmember />}
        {component === "supervisor" && <UD_HomeSupervisor />}
        {component === "adminNotice" && <Shv_admin_notice_home />}
        {component === "adminMarking" && <Shv_admin_marking_home />}
        {component === "adminTemplates" && <Shv_admin_template_home />}
        {component === "adminPanelManagement" && <Sug_Admin_manage_panel />}
      </div>
    </div>
  );
};

export default UD_Dashboard;
