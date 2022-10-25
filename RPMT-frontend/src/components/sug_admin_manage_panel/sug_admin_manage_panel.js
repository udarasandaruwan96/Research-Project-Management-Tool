import React, { useState } from "react";
import Sug_AllGroups_admin from "../sug_Assign_GrpID_&_panel/sug_All_assigned_grp_admin";
import Sug_GroupID_and_Panel_Assign from "../sug_Assign_GrpID_&_panel/sug_Assign_GrpID_&_panel";
import Sug_CreatePanel from "../sug_panel/Sug_CreatePanel"


const Sug_Admin_manage_panel = () => {
  const [component, setComponent] = useState("panel");

  return (
    <div>
            {component === "panel" && 
      <PanelMain onClick={setComponent} />}
      {/* {component === "createPanel" && 
      <Sug_CreatePanel onClick={setComponent} />}
       {component === "Assign_Panel_&_GroupId" && 
      <Sug_AllGroups_admin onClick={setComponent} />} */}

      
    </div>
  );
};

const PanelMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
            
          ></div>
          <a href="/createPanel" color="black"><h5 > createPanel</h5></a>
          
        </div>

       
        <div className="UD_addorderbutton">
          <div
            className="UD_addOrder"
            
          ></div>
         <a href="/All_groups_admin"><h5 color="black">Assign panel and groupId for groups</h5></a> 
        </div>
  

      

       
      </div>
    </div>
  );
};

export default Sug_Admin_manage_panel ;