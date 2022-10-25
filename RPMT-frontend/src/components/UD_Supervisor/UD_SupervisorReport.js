import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import swal from "sweetalert";
import axios from "axios";
import "./UD_MangeSupervisor.css";
import EditSupervisor from "./UD_EditSupervisor";
//--------------pdf-------------------------------------
import jsPDF from "jspdf";
import "jspdf-autotable";
import imageUrl from "../../assets/repo.png";

const UD_StudentReport = (props) => {
  const [supervisors, setSupervisors] = useState([]);
  const [edit, setEdit] = useState(false);
  const [Id, setId] = useState("");
  const [data, setData] = useState({});
  //-----------------pdf--------
  const columns = [
    { title: "FirstName", field: "firstName" },
    { title: "LastName", field: "lastName" },
    { title: "Address", field: "address" },
    { title: "City", field: "city" },
    { title: " PhoneNumber", field: "phoneNumber" },
    { title: "Email", field: "email" },
    { title: "Password", field: "password" },
  ];

  //search..........................
  const [filterText, setFilterText] = useState("");

  //retrieving data from the database---------------------------------
  useEffect(() => {
    axios
      .get("http://localhost:5000/super/supervisor${props.ID}")
      .then((res) => {
        setSupervisors(res.data.data);
      });
  });

  //search..........................
  const filteredItems = supervisors.filter((supp) =>
    supp.firstName.toLocaleLowerCase().includes(filterText)
  );
  const supervisorss = filterText ? filteredItems : supervisors;

  //------------------Download PDF ---------

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFont("Helvertica", "bold");
    doc.text("Supervisors Details", 90, 10);
    doc.addImage(imageUrl, "PNG", 20, 20, 50, 50);
    // doc.text("Date", 200, 20);
    doc.autoTable({
      margin: { top: 80 },
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: supervisors,
    });

    doc.save("Supervisors Details.pdf");
  };

  return (
    <>
      {edit ? (
        <EditSupervisor
          onClick={() => setEdit(false)}
          id={Id}
          formData={data}
        />
      ) : (
        <div className="ud_MSupervisor_Form1">
          <div className="ud_MSupervisor_title">Supervisor Details</div>

          {/* <div className="ud_MSupervisor_Form2"> */}
          <TableContainer
            component={Paper}
            style={{
              maxHeight: 450,
              minHeight: 200,
              maxWidth: 1200,
              backgroundColor: "#FFFFFF",
              borderRadius: "15px",
            }}
          >
            <br></br>

            {/* //search.......................... */}
            <div class="ud_MSupervisor_Search">
              <form action="">
                <input
                  className="ud_MSupervisor_Search_name "
                  type="text"
                  placeholder="Search By Supervisor Name"
                  name="search"
                  onChange={(e) =>
                    setFilterText(e.target.value.toLocaleLowerCase())
                  }
                />

                {/* <button className="ud_MSupervisor_search_Button" type="submit" value="search">
                  <SearchIcon />
                </button> */}
              </form>{" "}
            </div>

            <Table aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">FirstName</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">LastName</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">Address</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">City</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">PhoneNumber</div>
                  </TableCell>

                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">Email</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">Password</div>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {supervisorss.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      align="center"
                      component="th"
                      scope="UD_row"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.firstName}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.lastName}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.address}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.city}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.phoneNumber}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.email}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MSupervisor_cellColor"
                    >
                      {row.password}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <div
          onClick={() => props.onClick("Supervisoraddform")}className="ud_MSupervisor_addbutton">
          Add New Supervisor
        </div> */}

          <div
            onClick={() => props.onClick("supervisor")}
            className="ud_MSupervisor_back_button"
          >
            Previous
          </div>

          <button className="ud_MSupervisor_Pdf_Button" onClick={downloadPdf}>
            Downloard PDF
          </button>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default UD_StudentReport;
