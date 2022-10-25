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
import "./UD_MangePenalmember.css";
import EditPenalmember from "./UD_EditPenalmember";
//--------------pdf-------------------------------------
import jsPDF from "jspdf";
import "jspdf-autotable";
import imageUrl from "../../assets/repo.png";

const UD_PenalmemberReport = (props) => {
  const [penalmembers, setPenalmembers] = useState([]);
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
      .get("http://localhost:5000/penal/penalmember${props.ID}")
      .then((res) => {
        setPenalmembers(res.data.data);
      });
  });

  //search..........................
  const filteredItems = penalmembers.filter((supp) =>
    supp.firstName.toLocaleLowerCase().includes(filterText)
  );
  const penalmemberss = filterText ? filteredItems : penalmembers;

  //------------------Download PDF ---------

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFont("Helvertica", "bold");
    doc.text("PenalmemberReport Details", 90, 10);
    doc.addImage(imageUrl, "PNG", 20, 20, 50, 50);
    // doc.text("Date", 200, 20);
    doc.autoTable({
      margin: { top: 80 },
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: penalmembers,
    });

    doc.save("PenalmemberReport Details.pdf");
  };

  return (
    <>
      {edit ? (
        <EditPenalmember
          onClick={() => setEdit(false)}
          id={Id}
          formData={data}
        />
      ) : (
        <div className="ud_MPenalmeber_Form1">
          <div className="ud_MPenalmeber_title">Penalmember Details</div>

          {/* <div className="ud_MPenalmeber_Form2"> */}
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
            <div class="ud_MPenalmeber_Search">
              <form action="">
                <input
                  className="ud_MPenalmeber_Search_name "
                  type="text"
                  placeholder="Search By Penalmember Name"
                  name="search"
                  onChange={(e) =>
                    setFilterText(e.target.value.toLocaleLowerCase())
                  }
                />
              </form>{" "}
            </div>

            <Table aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">FirstName</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">LastName</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">Address</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">City</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">PhoneNumber</div>
                  </TableCell>

                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">Email</div>
                  </TableCell>
                  <TableCell
                    align="center"
                    className="ud_MPenalmeber_cellColor"
                  >
                    <div className="ud_MPenalmeber_headcolor">Password</div>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {penalmemberss.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      align="center"
                      component="th"
                      scope="UD_row"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.firstName}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.lastName}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.address}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.city}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.phoneNumber}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.email}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="ud_MPenalmeber_cellColor"
                    >
                      {row.password}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div
            onClick={() => props.onClick("penalmember")}
            className="ud_MPenalmeber_back_button"
          >
            Previous
          </div>

          <button className="ud_MPenalmeber_Pdf_Button" onClick={downloadPdf}>
            Downloard PDF
          </button>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default UD_PenalmemberReport;
