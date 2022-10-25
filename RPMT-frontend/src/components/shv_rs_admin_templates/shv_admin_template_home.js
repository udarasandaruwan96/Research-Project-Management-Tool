import React, { useState } from "react";
import "./shv_admin_template_home.css";
import TemplateHome from "./shv_template_home";
import TemplateList from "./shv_template_List";

const Shv_admin_template_home = () => {
  const [component, setComponent] = useState("adminTemplates");

  return (
    <div>
      {component === "adminTemplates" && <AdminTemplateMain onClick={setComponent} />}

      {component === "manageAdminTemplates" && (
        <TemplateList onClick={setComponent} />
      )}

      {component === "addAdminTemplates" && (
      
        <TemplateHome onClick={setComponent} />
      )}

    </div>
  );
};

const AdminTemplateMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
           
          ></div><br/>
           <a href = '/TemplateList'><button type="button" class="btn btn-success">View Templates</button></a>
        </div>

        <div className="UD_addorderbutton">
          
          <div
            className="UD_addOrder"
           
          ></div><br/>
         <a href = '/TemplateHome'><button type="button" class="btn btn-success">Publish Templates</button></a>
        </div>
      </div>
    </div>
  );
};

export default Shv_admin_template_home;
