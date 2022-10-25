//import React, { useState, useEffect } from "react";
//import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Typography, Box, responsiveFontSizes } from "@mui/material";
import "./UD_Student.css";

// useHistory  = useNavigate,
//Redirect = Navigate,NavLink
const UD_Student = ({ location }) => {
  return (
    <div>
      <Button
        LinkComponent={Link}
        to="/addRsTopics"
        sx={{ marginTop: 15, background: "orangered" }}
        variant="contained"
      >
        <Typography variant="h3">Student - Submit Research Topics</Typography>
      </Button>

      <Button
        LinkComponent={Link}
        to="/"
        sx={{ marginTop: 15, background: "green" }}
        variant="contained"
      >
        <Typography variant="h3">LOG OUT</Typography>
      </Button>
    </div>
  );
};

export default UD_Student;
