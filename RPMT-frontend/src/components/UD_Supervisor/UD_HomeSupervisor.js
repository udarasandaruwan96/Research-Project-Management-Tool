import React, { useState } from "react";
import "./UD_HomeSupervisor.css";
import UD_ManageSupervisor from "./UD_MangeSupervisor";
import UD_AddSupervisor from "./UD_AddSupervisor";
import UD_SupervisorReport from "./UD_SupervisorReport";

const UD_HomeSupervisor = () => {
  const [component, setComponent] = useState("supervisor");

  return (
    <div>
      {component === "supervisor" && <SupervisorMain onClick={setComponent} />}

      {component === "manageSupervisor" && (
        <UD_ManageSupervisor onClick={setComponent} />
      )}

      {component === "addSupervisor" && (
        <UD_AddSupervisor onClick={setComponent} />
      )}

      {component === "supervisorReport" && (
        <UD_SupervisorReport onClick={setComponent} />
      )}
    </div>
  );
};

const SupervisorMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_Supervisormain">
        <div className="UD_Supervisorbutton">
          <div
            className="UD_addSupervisor"
            onClick={() => props.onClick("manageSupervisor")}
          ></div>
          <h5> Supervisor Deatials</h5>
        </div>

        <div className="UD_Supervisorreportbutton">
          <div
            className="UD_Supervisorreport"
            onClick={() => props.onClick("supervisorReport")}
          ></div>
          <h5>Generate SupervisorReport</h5>
        </div>

        {/* <div className="UD_Supervisorreportbutton">
          <div
            className="UD_Supervisorreport"
            onClick={() => props.onClick("supervisorReport")}
          ></div>
          <h5>Generate SupervisorReport</h5>
        </div> */}
      </div>
    </div>
  );
};

export default UD_HomeSupervisor;
