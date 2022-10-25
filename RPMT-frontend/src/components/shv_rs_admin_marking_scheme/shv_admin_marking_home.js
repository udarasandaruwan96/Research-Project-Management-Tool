import React, { useState } from "react";
import "./shv_admin_marking_home.css";
import MarkingSchemeHome from "./shv_marking_scheme_home"; 
import MarkingSchemeList from "./shv_marking_scheme_List"; 

const Shv_admin_marking_home = () => {
  const [component, setComponent] = useState("adminMarking");

  return (
    <div>
      {component === "adminMarking" && <AdminMarkingMain onClick={setComponent} />}

      {component === "manageAdminMarking" && (
        <MarkingSchemeList onClick={setComponent} />
      )}

      {component === "addAdminMarking" && (
      
        <MarkingSchemeHome onClick={setComponent} />
      )}

    </div>
  );
};

const AdminMarkingMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
          ></div><br/>
          <a href = '/MSchemeList'><button  className="btn btn-success" >View Marking Schemes</button></a>
        </div>

        <div className="UD_addorderbutton">
          
          <div
            className="UD_addOrder"
          ></div><br/>
          <a href = '/MSchemeHome'><button className="btn btn-success" >Publish Marking Schemes</button></a>
        </div>
      </div>
    </div>
  );
};

export default Shv_admin_marking_home;
