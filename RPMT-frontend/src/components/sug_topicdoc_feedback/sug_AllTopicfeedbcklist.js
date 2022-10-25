import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import Sug_panelmembers_page from "../sug_panelmembers_page/sug_panelmembers_page"
import Sug_topicdoc_feedback from "./sug_topicdoc_feedbacks";
const URL = "http://localhost:5000/topicdoc_feedback2";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllTopicdocfeedbacks = () => {
  const [Feedbacks, setfeedbacks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setfeedbacks(data.Feedbacks));
  }, []);
  console.log(Feedbacks);


  return (
    <div class="py-3 ">

    <Sug_panelmembers_page/>

    <div className='contentsug'>
      
      <h1>All Feedbacks Given for Topic Document Submitions</h1>
      <div class="py-3 ">
    <div id="sug_table"> <ul>
      
     <th width={"200px"}>GroupId</th>
     <th width={"200px"}>Panel ID</th>
     <th width={"200px"}>Feedback</th>
     <th width={"200px"}>EvaluvatedDate</th>
    
     <th width={"200px"}>Action</th>
     <table>
      {Feedbacks && Feedbacks.map((Feedbacks, i)=>(
        
        <tr  key={i}>
         <Sug_topicdoc_feedback Feedbacks={Feedbacks}/>
        </tr>
      ))}
      </table>
      </ul></div></div></div></div>
  )
}

export default Sug_AllTopicdocfeedbacks ;