import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import swal from 'sweetalert';
  
  const Shv_res_topic_notice_admin_add = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        ResTopicNoticeHeader: "",
        ResTopicNoticeLineOne: "",
        ResTopicNoticeLineTwo: "",
        ResTopicNoticeLineThree: "",
        ResTopicNoticeDueDate: "",
    });
  
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const sendRequest = async () => {

      if(inputs.ResTopicNoticeHeader.length == 0 || inputs.ResTopicNoticeLineOne.length == 0 || inputs.ResTopicNoticeLineThree.length == 0 || inputs.ResTopicNoticeDueDate.length == 0 ){
        swal("Feilds Cannot Be empty !!", "You Must fill all the feilds !!", "error");
      }else{
      await axios
        .post("http://localhost:5000/resTopicsNotice", {
          ResTopicNoticeHeader: String(inputs.ResTopicNoticeHeader),
          ResTopicNoticeLineOne: String(inputs.ResTopicNoticeLineOne),
          ResTopicNoticeLineTwo: String(inputs.ResTopicNoticeLineTwo),
          ResTopicNoticeLineThree: String(inputs.ResTopicNoticeLineThree),
          ResTopicNoticeDueDate: String(inputs.ResTopicNoticeDueDate)
  
        })
        .then((res) => res.data)
        .then(() => history("/RsTopicsNotices"));
        swal("Successful!", "Notice Successfully Published !!", "success");
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest();
    };
  
    return (
      <div className="container">
                <center>
          <h1 className="h3 mb-3 font-weight-normal" ><font face = "Comic sans MS" size =""><b>Publish the Notice</b></font></h1>
           </center> 
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={5}
        >
          <FormLabel>Notice Header</FormLabel>
          <TextField
            value={inputs.ResTopicNoticeHeader}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="ResTopicNoticeHeader"
          />
          <FormLabel>Line One</FormLabel>
          <TextField
            value={inputs.ResTopicNoticeLineOne}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="ResTopicNoticeLineOne"
          />
          <FormLabel>Line Two</FormLabel>
          <TextField
            value={inputs.ResTopicNoticeLineTwo}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="ResTopicNoticeLineTwo"
          />
          <FormLabel>Line Three</FormLabel>
          <TextField
            value={inputs.ResTopicNoticeLineThree}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
            name="ResTopicNoticeLineThree"
          />
          <FormLabel>Due Date</FormLabel>
          <TextField
            value={inputs.ResTopicNoticeDueDate}
            onChange={handleChange}
            type="Date"
            margin="normal"
            fullWidth
            variant="filled"
            name="ResTopicNoticeDueDate"
          />
          <br/>
          <Button variant="contained" type="submit">
            Publish the Notice
          </Button>
        </Box>
      </form>
  
      </div>
    );
  };
  
  export default Shv_res_topic_notice_admin_add;
  