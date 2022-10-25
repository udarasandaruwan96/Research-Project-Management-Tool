import React, { useState } from "react";
import "./UD_HomeStudent.css";
import UD_ManageStudent from "./UD_MangeStudent";
import UD_AddStudent from "./UD_AddStudent";
import UD_StudentReport from "./UD_StudentReport";

const UD_HomeStudent = () => {
  const [component, setComponent] = useState("student");

  return (
    <div>
      {component === "student" && <StudentMain onClick={setComponent} />}

      {component === "manageStudent" && (
        <UD_ManageStudent onClick={setComponent} />
      )}

      {component === "addStudent" && <UD_AddStudent onClick={setComponent} />}

      {component === "studentReport" && (
        <UD_StudentReport onClick={setComponent} />
      )}
    </div>
  );
};

const StudentMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_Studentmain">
        <div className="UD_Studentbutton">
          <div
            className="UD_addStudent"
            onClick={() => props.onClick("manageStudent")}
          ></div>
          <h5> Student Deatials</h5>
        </div>

        <div className="UD_GenerateStudentReportbutton">
          <div
            className="UD_GenerateStudentReport"
            onClick={() => props.onClick("studentReport")}
          ></div>
          <h5>Generate StudentReport</h5>
        </div>

        {/* <div className="UD_Studentreportbutton">
          <div
            className="UD_Studentreport"
            onClick={() => props.onClick("studentReport")}
          ></div>
          <h5>Generate StudentReport</h5>
        </div> */}
      </div>
    </div>
  );
};

export default UD_HomeStudent;
