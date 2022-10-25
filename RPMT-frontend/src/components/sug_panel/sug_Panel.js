import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

const Panel= (props) => {
  const history = useNavigate();
    const { _id, panelID,panelmember1,panelmember2,panelmember3,panelmember4 }=props.panel;
   
 
    const deleteHandler = async () => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        
         axios
        .delete(`http://localhost:5000/panelcreate/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/allPanel"));

          swal("Poof! Panel has been deleted!", {
            icon: "success",

     
          });
        } else {
          swal("Panel record is safe!");
        }
      });
      
    };
   
 

  return (
    <div >
      <tr>
       <td width={"200px"}>{panelID}</td>
       <td width={"200px"}>{panelmember1}</td>
       <td width={"200px"}>{panelmember2}</td>
       <td width={"200px"}>{panelmember3}</td>
       <td width={"200px"} >{panelmember4}</td>
      
       <td width={"200px"}> <a><button class="btn btn-danger" onClick={deleteHandler} ><i class="fa fa-trash-o" aria-hidden="true"></i>delete</button></a> 
        &nbsp;
        <a ><button class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> update </button></a> </td>
       </tr>
 
        
    </div>
  )
}

export default Panel;