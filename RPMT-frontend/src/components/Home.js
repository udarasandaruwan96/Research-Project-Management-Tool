import { Button, Typography, Box, responsiveFontSizes } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">

      

      <Button
          LinkComponent={Link}
          to="/stdHome"
          sx={{ marginTop: 15, background: "orangered"}}
          variant="contained"
        >
          <Typography variant="h3">Student - HOME PAGE</Typography>
        </Button>

      <Button
          LinkComponent={Link}
          to="/addRsTopics"
          sx={{ marginTop: 15, background: "orangered"}}
          variant="contained"
        >
          <Typography variant="h3">Student - Submit Research Topics</Typography>
        </Button>
        
        <Button
          LinkComponent={Link}
          to="/RsTopics"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">STUDENT - View/Update/Delete Topics</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicsSupervisor"
          sx={{ marginTop: 15, background: "Blue" }}
          variant="contained"
        >
          <Typography variant="h3">SUPERVISOR - View All research topics submitted by students</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/addRsTopicsNotice"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Admin-Add Research topic Submission</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicsNotices"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Admin-View/update/delete Topic submission Notices</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicsNoticesStudent"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Student Research Topic submission Notices</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopicFileHome"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Topic Files submission</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/RsTopiFileList"
          sx={{ marginTop: 15, background: "Green" }}
          variant="contained"
        >
          <Typography variant="h3">Download Topic files</Typography>
        </Button>

        
        <Button
          LinkComponent={Link}
          to="/RsDocHome"
          sx={{ marginTop: 15, background: "Brown" }}
          variant="contained"
        >
          <Typography variant="h3">Student-Submit Research Document</Typography>
        </Button>


        
        <Button
          LinkComponent={Link}
          to="/RsDocFilesList"
          sx={{ marginTop: 15, background: "Brown" }}
          variant="contained"
        >
          <Typography variant="h3">Download Research Document</Typography>
        </Button>


        <Button
          LinkComponent={Link}
          to="/ThesisHome"
          sx={{ marginTop: 15, background: "Purple" }}
          variant="contained"
        >
          <Typography variant="h3">Student-Submit Thesis Document</Typography>
        </Button>


        
        <Button
          LinkComponent={Link}
          to="/ThesisFilesList"
          sx={{ marginTop: 15, background: "Purple" }}
          variant="contained"
        >
          <Typography variant="h3">Download Thesis Document</Typography>
        </Button>

        <Button
          LinkComponent={Link}
          to="/MSchemeHome"
          sx={{ marginTop: 15, background: "Yellow" }}
          variant="contained"
        >
          <Typography variant="h3">Upload Marking Scheme</Typography>
        </Button>


        
        <Button
          LinkComponent={Link}
          to="/MSchemeList"
          sx={{ marginTop: 15, background: "Yellow" }}
          variant="contained"
        >
          <Typography variant="h3">Download Marking Scheme</Typography>
        </Button>



        <Button
          LinkComponent={Link}
          to="/TemplateHome"
          sx={{ marginTop: 15, background: "Cyan" }}
          variant="contained"
        >
          <Typography variant="h3">ADMIN - Upload Templates</Typography>
        </Button>


        
        <Button
          LinkComponent={Link}
          to="/TemplateList"
          sx={{ marginTop: 15, background: "Cyan" }}
          variant="contained"
        >
          <Typography variant="h3">Download Templates</Typography>
        </Button>
        

     

      </Box>
    </div>
  );
};



export default Home;
