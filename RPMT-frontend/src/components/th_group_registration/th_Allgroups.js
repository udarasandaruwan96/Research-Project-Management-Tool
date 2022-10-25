import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import Th_groups from "./th_group";
const URL = "http://localhost:5000/group";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Th_AllGroups = () => {
  const [Groups , setGroups ] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setGroups(data.Groups));
  }, []);
  console.log(Groups);


  return (
    <div id="sug_table"> <ul>
      <h1>Groups Details</h1>
     <th width={"200px"}>Grpoup Leader</th>
     <th width={"200px"}>Grpoup member2</th>
     <th width={"200px"}>Grpoup member3</th>
     <th width={"200px"}>Grpoup member4</th>
     <th width={"200px"}>Group ID</th>
     <th width={"200px"}>Panel</th>
     <th width={"200px"}>Final marks</th>
     <table>
      {Groups && Groups.map((Groups, i)=>(
        
        <tr  key={i}>
         <Th_groups Groups={Groups}/>
        </tr>
      ))}
      </table>
      </ul></div>
  )
}

export default Th_AllGroups ;