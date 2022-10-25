import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Sug_grp_admin= (props) => {
  const history = useNavigate();
    const { _id,Grp_Leader,Grp_member2,Grp_member3,Grp_member4,Grp_ID,Panel,Finalmarks }=props.Groups;
   
 

   
 

  return (
    <div >
      <tr>
       <td width={"200px"}>{Grp_Leader}</td>
       <td width={"200px"} >{Grp_member2}</td>
       <td width={"200px"}>{Grp_member3}</td>
       <td width={"200px"}>{Grp_member4}</td>

       <td width={"200px"}>  

       <Button LinkComponent={Link} to={`/All_groups_admin/${_id}`} sx={{ mt: "auto" }}> give Panel and group id </Button>
       
       
       </td>
       <td width={"200px"}>{Grp_ID}</td>
       <td width={"200px"}>{Panel}</td>
      
       </tr>
 
        
    </div>
  )
}

export default  Sug_grp_admin;