import React, { useEffect, useState } from "react";
import "./styles/shv_rs_topic.css";
import axios from "axios";
import Shv_rs_topic from "./shv_rs_topic_student";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const URL = "http://localhost:5000/resTopics";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Shv_rs_topics = () => {
  
  const [resTopics, setresTopics] = useState();

  useEffect(() => {
  
    fetchHandler().then((data) => setresTopics(data.resTopics));
  
  }, []);
  
  console.log(resTopics);


  const StyledTableCell = withStyles((theme) => ({
  
      backgroundColor: theme.palette.common.black,

  }))(TableCell);


  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles((theme) => ({
    selected: {
       backgroundColor: "white",
       "&:hover": {
         backgroundColor: "white",
       },
     },
   }));

  
   
    const classes = useStyles();
  
  return (
    <div>
    &nbsp;<a href = "/stdHome"><button className="btn btn-success">Back</button></a>
      <br/>
   
      <center>
        <h1>Research topics submitted by students</h1><br/><br/><br/>
       
      <TableRow selected classes={{selected: classes.selected,}} >
          <StyledTableCell width="135px"><b>Group ID</b></StyledTableCell> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell width="210px"><b>Supervisor</b></StyledTableCell> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell width="210px"><b>Research Area</b></StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell width="210px"><b>Research Topic</b></StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
          <StyledTableCell width="210px"><b>Date Entered</b></StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
          <StyledTableCell width="100px"><b>Action</b></StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
        </TableRow>

        <br/>
  
        {resTopics &&
          resTopics.map((resTopic, i) => (
            <StyledTableRow key={i}>&nbsp;
              <Shv_rs_topic resTopic={resTopic} />
            </StyledTableRow>
          ))}
  </center>
    </div>
  );
};

export default Shv_rs_topics;
