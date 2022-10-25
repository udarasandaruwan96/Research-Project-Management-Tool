import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./shv_rs_topic_notice_styles.css";
import swal from "sweetalert";

const Shv_res_topic_notice_admin = (props) => {
  const history = useNavigate();

  const {
    _id,
    ResTopicNoticeHeader,
    ResTopicNoticeLineOne,
    ResTopicNoticeLineTwo,
    ResTopicNoticeLineThree,
    ResTopicNoticeDueDate,
  } = props.resTopicNotice;

  const deleteHandler = async () => {
    swal({
      title: "Are you sure?",
      text: "Once Deleted, You Will Not Be Able To Recover Notice !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/resTopicsNotice/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(() => history("/RsTopicsNotices"));
        swal("Done! Notice has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Notice not deleted !");
      }
    });
  };

  return (
    <div>
      <div className="ssCard">
        <div
          className="container border"
          style={{
            marginTop: "80px",

            width: "100%",

            backgroundImage: `url('https://www.xmple.com/wallpaper/linear-white-green-gradient-1920x1080-c2-90ee90-ffffff-a-90-f-14.svg')`,

            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          <center>
            <h3 style={{ color: "red", fontWeight: "20pt" }}>Notice</h3>
          </center>
          <br />
          <h4>1.{ResTopicNoticeHeader}</h4>
          <br />
          <h4>2.{ResTopicNoticeLineOne}</h4>
          <br />
          <h4>3.{ResTopicNoticeLineTwo}</h4>
          <br />
          <h4>4.{ResTopicNoticeLineThree}</h4>
          <br />
          <h4>5.Due Date :{ResTopicNoticeDueDate}</h4>
          <br />

          <center>
            <Button
              variant="contained"
              color="warning"
              LinkComponent={Link}
              to={`/RsTopicsNotice/${_id}`}
              sx={{ mt: "auto" }}
            >
              Update
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="error"
              onClick={deleteHandler}
              sx={{ mt: "auto" }}
            >
              Delete
            </Button>
            &nbsp;
            <a href="/dashboard">
              <Button variant="contained" color="secondary">
                Back
              </Button>
            </a>
          </center>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Shv_res_topic_notice_admin;
