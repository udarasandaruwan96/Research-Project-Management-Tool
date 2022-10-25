import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import Sug_student_resdoc_feedback from "./sug_student_resdoc_feedback";
const URL = "http://localhost:5000/resdoc_feedback2";


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_student_resdoc_feedbackALL = () => {
  const [Feedbacks, setfeedbacks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setfeedbacks(data.Feedbacks));
  }, []);
  console.log(Feedbacks);


  return (
    <div class="py-5 h-100">
   
    <div >
      
    <h1>All Reserch Document Feedbacks</h1>
    <div className='container contact'>
    <div id="sug_table"> <ul>
      
     <th width={"200px"}>GroupId</th>
     <th width={"200px"}>Supervisor</th>
     <th width={"200px"}>Topic</th>
     <th width={"200px"}>Feedback</th>
     <th width={"200px"}>Evaluvated Date</th>
    
   
     <table>
      {Feedbacks && Feedbacks.map((Feedbacks, i)=>(
        
        <tr  key={i}>
         <Sug_student_resdoc_feedback Feedbacks={Feedbacks}/>
        </tr>
      ))}
      </table>
      </ul></div>
      </div>
      </div>
      </div>
  )
}

export default Sug_student_resdoc_feedbackALL;