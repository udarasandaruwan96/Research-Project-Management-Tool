import React, { useState } from "react";
import "./UD_HomePenalmember.css";
import UD_ManagePenalmember from "./UD_MangePenalmember";
import UD_AddPenalmember from "./UD_AddPenalmember";
import UD_PenalmemberReport from "./UD_PenalmemberReport";

const UD_HomePenalmember = () => {
  const [component, setComponent] = useState("penalmember");

  return (
    <div>
      {component === "penalmember" && (
        <PenalmemberMain onClick={setComponent} />
      )}

      {component === "managePenalmember" && (
        <UD_ManagePenalmember onClick={setComponent} />
      )}

      {component === "addPenalmember" && (
        <UD_AddPenalmember onClick={setComponent} />
      )}

      {component === "penalmemberReport" && (
        <UD_PenalmemberReport onClick={setComponent} />
      )}
    </div>
  );
};

const PenalmemberMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_Penalmebermain">
        <div className="UD_Penalmeberbutton">
          <div
            className="UD_addPenalmeber"
            onClick={() => props.onClick("managePenalmember")}
          ></div>
          <h5> Penalmember Deatials</h5>
        </div>

        <div className="UD_GeneratePenalmember_report_button">
          <div
            className="UD_GeneratePenalmember_report"
            onClick={() => props.onClick("penalmemberReport")}
          ></div>
          <h5>Generate PenalmemberReport</h5>
        </div>
      </div>
    </div>
  );
};

export default UD_HomePenalmember;
