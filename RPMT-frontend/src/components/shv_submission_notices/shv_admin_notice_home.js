import React, { useState } from "react";
import "./shv_admin_notice_home.css";
import { Button } from "@mui/material";
import Shv_res_topic_notice_admin_add from "./shv_res_topic_notice_admin_add";
import Shv_res_topic_notices_admin from "./shv_res_topic_notices_admin";


const Shv_admin_notice_home = () => {
  const [component, setComponent] = useState("adminNotice");

  return (
    <div>
      {component === "adminNotice" && <AdminNoticeMain onClick={setComponent} />}

      {component === "manageAdminNotice" && (
        <Shv_res_topic_notices_admin onClick={setComponent} />
      )}

      {component === "addAdminNotice" && (
        <Shv_res_topic_notice_admin_add onClick={setComponent} />
      )}

    </div>
  );
};

const AdminNoticeMain = (props) => {
  return (
    <div className="UD_row">
      <div className="UD_suppliermain">
        <div className="UD_supplierbutton">
          <div
            className="UD_addSupplier"
          ></div>
          <br/>
          <a href = '/RsTopicsNotices'><button type="button" class="btn btn-success">View Notices</button></a>
        </div>

        <div className="UD_addorderbutton">
          
          <div
            className="UD_addOrder"
            onClick={() => props.onClick("addAdminNotice")}
          ></div>
          <br/>
          <a href = '/addRsTopicsNotice'><button type="button" class="btn btn-success">Publish Notices</button></a>
        </div>
      </div>
    </div>
  );
};

export default Shv_admin_notice_home;
