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

const Shv_rs_topic_details = () => {

  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/resTopics/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.resTopics));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {

    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    if(inputs.ResTopicgroupId.length == 0 || inputs.ResTopicsupervisor.length == 0 || inputs.ResTopicresearchArea.length == 0 || inputs.ResTopicResearchTopic.length == 0 ){
      swal("Feilds Cannot Be empty !!", "You Must fill all the feilds !!", "error");
    }else if((!name.test(String(inputs.ResTopicsupervisor)))){
      swal("Invalid Supervisor Name !", "Name cannot contain numbers ! Please enter valid name !", "error");
    }else{
    await axios
      .put(`http://localhost:5000/resTopics/${id}`, {
        ResTopicgroupId: String(inputs.ResTopicgroupId),
        ResTopicsupervisor: String(inputs.ResTopicsupervisor),
        ResTopicresearchArea: String(inputs.ResTopicresearchArea),
        ResTopicResearchTopic: String(inputs.ResTopicResearchTopic),
        ResTopicdateEntered : String(inputs.ResTopicdateEntered),
      })
      .then((res) => res.data).then(() => history("/RsTopics"));
      
      swal("Successful!", "Research Topic Successfully Updated !!", "success");
    }
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

        <center>
        <h1 className="h3 mb-3 font-weight-normal"><font face = "Comic sans MS" size ="6"><b>Update Research Topic</b></font></h1>
        </center> 

      <div>
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
        <FormLabel><b>Group ID</b></FormLabel>
        <TextField
          value={inputs.ResTopicgroupId}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicgroupId"
        /><br/>
        <FormLabel><b>Supervisor's Name</b></FormLabel>
        <TextField
          value={inputs.ResTopicsupervisor}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicsupervisor"
        /><br/>
        <FormLabel><b>Research Area</b></FormLabel>
        <TextField
          value={inputs.ResTopicresearchArea}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicresearchArea"
        /><br/>
        <FormLabel><b>Research Topic</b></FormLabel>
        <TextField
          value={inputs.ResTopicResearchTopic}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="filled"
          name="ResTopicResearchTopic"
        /><br/>

        <br/>
        <Button variant="contained" type="submit">
          Update Research Topic
        </Button>
      </Box>
        </form>
      )}
    </div>
    </div>
  );
};

export default Shv_rs_topic_details;
