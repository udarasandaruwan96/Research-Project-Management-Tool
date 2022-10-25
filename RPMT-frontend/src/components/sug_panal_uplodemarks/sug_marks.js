import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Sug_marks= (props) => {
  const history = useNavigate();
    const { _id,Grp_Leader,Grp_member2,Grp_member3,Grp_member4,Grp_ID,Panel,Finalmarks }=props.Groups;
   
 
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/group/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/AllTopicDocFeedback"));
    };
   
 

  return (
    <div >
      <tr>
       <td width={"150px"}>{Grp_Leader}</td>
       <td width={"150px"} >{Grp_member2}</td>
       <td width={"150px"}>{Grp_member3}</td>
       <td width={"150px"}>{Grp_member4}</td>
       <td width={"150px"}>{Grp_ID}</td>
       <td width={"150px"}>{Panel}</td>
       <td width={"150px"}>  

       <Button LinkComponent={Link} to={`/All_groups_marks/${_id}`} sx={{ mt: "auto" }}> add marks </Button>
       
       
       </td>
       <td width={"150px"}>{Finalmarks}</td>
       
      
       </tr>
 
        
    </div>
  )
}

export default  Sug_marks;