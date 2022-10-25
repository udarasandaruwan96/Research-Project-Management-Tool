import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import Sug_panelmembers_page from "../sug_panelmembers_page/sug_panelmembers_page"

import Sug_marks from "./sug_marks";
const URL = "http://localhost:5000/group";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllGroups_Mark = () => {
  const [Groups , setGroups ] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setGroups(data.Groups));
  }, []);
  console.log(Groups);


  return (
    <div class="py-3 ">

    <Sug_panelmembers_page/>

    <div className='contentsug'>
      
      <h1>All Feedbacks Given for Topic Document Submitions</h1>
      <div class="py-3 ">
    <div id="sug_table"> <ul>
     
     <th width={"150px"}>Grpoup Leader</th>
     <th width={"150px"}>Grpoup member2</th>
     <th width={"150px"}>Grpoup member3</th>
     <th width={"150px"}>Grpoup member4</th>
    
     <th width={"150px"}>Group ID</th>
     <th width={"150px"}>Panel</th>
     
     <th width={"150px"}>Action</th>
     
     <th width={"150px"}>Finalmarks</th>
     <table>
      {Groups && Groups.map((Groups, i)=>(
        
        <tr  key={i}>
         <Sug_marks  Groups={Groups}/>
        </tr>
      ))}
      </table>
      </ul></div></div></div></div>
  )
}

export default Sug_AllGroups_Mark ;