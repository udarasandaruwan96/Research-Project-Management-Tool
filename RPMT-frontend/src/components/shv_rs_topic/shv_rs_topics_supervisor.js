import React, { useEffect, useState } from "react";
import "./styles/shv_rs_topic.css";
import axios from "axios";
import Shv_rs_topic_supervisor from "./shv_rs_topic_supervisor";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const URL = "http://localhost:5000/resTopics";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Shv_rs_topics_supervisor = () => {
  
  const [resTopics, setresTopics] = useState();

  useEffect(() => {
  
    fetchHandler().then((data) => setresTopics(data.resTopics));
  
  }, []);
  
  console.log(resTopics);


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 20,
      
    },
  }))(TableCell);


  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <center>
        <h1>Research topics submitted by students</h1><br/><br/><br/>


        <TableRow>
          <StyledTableCell align="left" ><b>Group ID</b></StyledTableCell> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell align="left" ><b>Supervisor</b></StyledTableCell> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell align="left" ><b>Research Area</b></StyledTableCell>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <StyledTableCell align="left" ><b>Research Topic</b></StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
          <StyledTableCell align="left" width="95"><b>Date Entered</b></StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
      
        </TableRow>

        <br/>
  
        {resTopics &&
          resTopics.map((resTopic, i) => (
            <StyledTableRow key={i}>&nbsp;&nbsp;
              <Shv_rs_topic_supervisor resTopic={resTopic} />
            </StyledTableRow>
          ))}
  </center>
    </div>
  );
};

export default Shv_rs_topics_supervisor;
