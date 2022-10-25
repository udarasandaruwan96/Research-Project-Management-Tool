import React ,{ useEffect, useState }from 'react'
import axios from "axios"


import Sug_student_thesisdoc_feedback from "./sug_student_thesis_doc_feedback";
const URL = "http://localhost:5000/thesisdoc_feedback2";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_student_AllThesisdocfeedbacks = () => {
  const [Feedbacks, setfeedbacks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setfeedbacks(data.Feedbacks));
  }, []);
  console.log(Feedbacks);


  return (<div>

    

    <div >
      
      <h1>All feedbacks given for thesis submitions</h1>
      <div className='container contact'>
    <div id="sug_table"> <ul>
      
     <th width={"200px"}>GroupId</th>
     <th width={"200px"}>Supervisor</th>
     <th width={"200px"}>Feedback</th>
     <th width={"200px"}>EvaluvatedDate</th>
    
  
     <table>
      {Feedbacks && Feedbacks.map((Feedbacks, i)=>(
        
        <tr  key={i}>
         <Sug_student_thesisdoc_feedback  Feedbacks={Feedbacks}/>
        </tr>
      ))}
      </table>
      </ul></div></div></div></div>
  )
}

export default Sug_student_AllThesisdocfeedbacks ;