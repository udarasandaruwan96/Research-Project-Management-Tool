import React, { useEffect, useState } from "react";
import axios from "axios";
import Shv_res_topic_notice_admin from "./shv_res_topic_notice_admin";
import "./shv_rs_topic_notice_styles.css";
const URL = "http://localhost:5000/resTopicsNotice";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Shv_res_topic_notices_admin = () => {

  const [resTopicsNotices, setresTopicsNotices] = useState();
  
  useEffect(() => {
  
    fetchHandler().then((data) => setresTopicsNotices(data.resTopicsNotices));
  
  }, []);
  
  console.log(resTopicsNotices);
  
  return (
    <div>
      <ul className="shv_ul">
        {resTopicsNotices &&
          resTopicsNotices.map((resTopicNotice, i) => (
            <li className="shv_li" key={i}>
              <Shv_res_topic_notice_admin resTopicNotice={resTopicNotice} />
            </li>
          ))}
              
      </ul><br/><br/>
    </div>
  );
};

export default Shv_res_topic_notices_admin;
