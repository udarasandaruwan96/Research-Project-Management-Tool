import React, { useEffect, useState } from "react";
import axios from "axios";
import Shv_res_topic_notice_student from "./shv_res_topic_notice_student";
import "./shv_rs_topic_notice_styles.css";
import { Button, Typography, Box, responsiveFontSizes } from "@mui/material";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000/resTopicsNotice";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Shv_res_topic_notices_student = () => {

  const [resTopicsNotices, setresTopicsNotices] = useState();
  
  useEffect(() => {
  
    fetchHandler().then((data) => setresTopicsNotices(data.resTopicsNotices));
  
  }, []);
  
  console.log(resTopicsNotices);
  
  return (
    <div>
      <ul className="shv_ul" >
        {resTopicsNotices &&
          resTopicsNotices.map((resTopicNotice, i) => (
            <li  className="shv_li" key={i}>
              <Shv_res_topic_notice_student resTopicNotice={resTopicNotice} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Shv_res_topic_notices_student;
