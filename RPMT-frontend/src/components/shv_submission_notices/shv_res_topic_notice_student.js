import { Link, useNavigate } from "react-router-dom";
import "./shv_rs_topic_notice_styles.css";

const Shv_res_topic_notice_student = (props) => {

  const history = useNavigate();
  const { _id, ResTopicNoticeHeader, ResTopicNoticeLineOne, ResTopicNoticeLineTwo, ResTopicNoticeLineThree, ResTopicNoticeDueDate } = props.resTopicNotice;


  return (
    <div className="ssCard">
    <div className="container border" style={{

      marginTop: "80px",

      width: '100%',

      backgroundImage: `url('https://www.xmple.com/wallpaper/linear-white-green-gradient-1920x1080-c2-90ee90-ffffff-a-90-f-14.svg')`,

      backgroundPosition: 'center',

      backgroundSize: 'cover',

      }}>
      <center><h3 style={{ color: 'red', fontWeight:'20pt'}}>Notice</h3></center><br/>
      <h4>1.{ResTopicNoticeHeader}</h4><br/>
      <h4>2.{ResTopicNoticeLineOne}</h4><br/>
      <h4>3.{ResTopicNoticeLineTwo}</h4><br/>
      <h4>4.{ResTopicNoticeLineThree}</h4><br/>
      <h4>5.Due Date :{ResTopicNoticeDueDate}</h4><br/>
  
      </div>  
      </div>
   
 
  );
};

export default Shv_res_topic_notice_student;
