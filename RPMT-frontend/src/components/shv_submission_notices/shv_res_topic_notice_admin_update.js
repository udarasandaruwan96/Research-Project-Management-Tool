import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import swal from 'sweetalert';

  const Shv_res_topic_notice_admin_update = () => {
  
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const history = useNavigate();
    
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/resTopicsNotice/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.resTopicsNotice));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/resTopicsNotice/${id}`, {
          ResTopicNoticeHeader: String(inputs.ResTopicNoticeHeader),
          ResTopicNoticeLineOne: String(inputs.ResTopicNoticeLineOne),
          ResTopicNoticeLineTwo: String(inputs.ResTopicNoticeLineTwo),
          ResTopicNoticeLineThree: String(inputs.ResTopicNoticeLineThree),
          ResTopicNoticeDueDate : String(inputs.ResTopicNoticeDueDate),
        })
        .then((res) => res.data).then(() => history("/RsTopicsNotices"));
        swal("Successful!", "Notice Successfully Updated !!", "success");
      };

    
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest();
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        <br/><br/>
        <center>
        <h1>Update Notice</h1>
        </center>
        {inputs && (
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
          <FormLabel>Heading</FormLabel>
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
            Update Notice
          </Button>
        </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default Shv_res_topic_notice_admin_update;
  