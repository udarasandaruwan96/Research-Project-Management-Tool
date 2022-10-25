import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import Panel from "./sug_Panel";
import "./sug_AllPanel.css"
import Sug_panelmembers_page from "../sug_panelmembers_page/sug_panelmembers_page"

const URL = "http://localhost:5000/panelcreate";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Sug_AllPanels = () => {
  const [panels, setPanels] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPanels(data.panels));
  }, []);
  console.log(panels);



  
  return (
    <div>
    <Sug_panelmembers_page/>
    
    <div id="sug_table" className='contentsug'> <ul>
     <h1>All Panels</h1>
<tr >
       <th width={"200px"}>panelID</th>
       <th width={"200px"}>panelmember1</th>
       <th width={"200px"}>panelmember2</th>
       <th width={"200px"}>panelmember3</th>
       <th width={"200px"}>panelmember4</th>
       <th width={"200px"}>Action</th>
       </tr>
       <table>
      {panels && panels.map((panel, i)=>(
        <tr  key={i}>
      <Panel panel={panel}/>
        </tr>
        
      ))}
      </table>
      </ul></div>
      </div>
  )
}

export default Sug_AllPanels;

