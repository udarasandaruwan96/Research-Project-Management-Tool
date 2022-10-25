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
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import imageUrl from "../../assets/romaka2.jpg";

const UD_ManageSupervisor = (props) => {
  const [supervisors, setSupervisors] = useState([]);
  const [edit, setEdit] = useState(false);
  const [Id, setId] = useState("");
  const [data, setData] = useState({});

  //search..........................
  const [filterText, setFilterText] = useState("");

  //.....Delete..............
  const deleteData = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once Deleted, you will not be able to recover this Supervisor details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `http://localhost:5000/super/supervisorregister${e.target.value}`
          )
          .then((res) => res.data);

        swal("Done! Supervisor has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Supervisor not deleted !");
      }
    });
  };

  const editData = (e, data) => {
    setId(e.target.value);
    setData(data);
    setEdit(true);
  };

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
              // backgroundColor: "#1B1B1B",
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

                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">Action</div>
                  </TableCell>

                  <TableCell
                    align="center"
                    className="ud_MSupervisor_cellColor"
                  >
                    <div className="ud_MSupervisor_headcolor">Action</div>
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

                    <TableCell
                      itemType="button"
                      align="center"
                      className="ud_MSupervisor_Edit_Icon5"
                    >
                      <button
                        className="ud_MSupervisor_Edit_Icon6"
                        value={row._id}
                        onClick={deleteData}
                      >
                        Delete
                      </button>
                    </TableCell>

                    <TableCell
                      itemType="button"
                      align="center"
                      className="ud_MSupervisor_deleteIcon7"
                    >
                      <button
                        className="ud_MSupervisor_deleteIcon8"
                        value={row._id}
                        onClick={(e) => editData(e, row)}
                      >
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div
            onClick={() => props.onClick("addSupervisor")}
            className="ud_MSupervisor_addbutton"
          >
            Add New Supervisor
          </div>

          <div
            onClick={() => props.onClick("supervisor")}
            className="ud_MSupervisor_back_button"
          >
            Previous
          </div>

          {/* <button className="ud_MSupervisor_Pdf_Button" onClick={downloadPdf}>
            Downloard PDF
          </button> */}
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default UD_ManageSupervisor;
