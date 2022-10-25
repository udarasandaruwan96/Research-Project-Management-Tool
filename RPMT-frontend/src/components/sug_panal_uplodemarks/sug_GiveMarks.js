import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom";
import { TextField } from '@material-ui/core';
import Sug_panelmembers_page from "../sug_panelmembers_page/sug_panelmembers_page"
import swal from 'sweetalert';

const Sug_FinalMarks_Assign = () => {
  const [inputs, setInputs] = useState({});
    const id =useParams().id;
    const history = useNavigate();


    useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/group/${id}`)
        .then((res) => res.data)
        .then(data=>setInputs(data.Groups))
           
        };
        fetchHandler()
      }, [id]);

     
      const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      const sendRequest = async () => {
        if(inputs.Grp_ID.length == 0 || inputs.Panel.length == 0 || inputs.Finalmarks.length == 0 ){
         
          swal("Feilds Cannot Be empty !!", "You Must fill all the feilds !!", "error");

        }else{
          await axios
          .put(`http://localhost:5000/group/${id}`, {
          
            Grp_ID:String(inputs.Grp_ID),
            Panel:String(inputs.Panel),
            Finalmarks:String(inputs.Finalmarks)
          })
          .then((res) => res.data).then(() => history("/All_groups_marks"));
        }
       
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest();
      };
   


 
  
    
    

  return (



<div>
      <div>
      <Sug_panelmembers_page/>
   <div className='contentsug'>
<div className="col-md-8 mt-4 mx-auto">
    <h1 > Final Marks Upload and Update</h1>
    </div>
      {inputs && (
 <form onSubmit={handleSubmit} >

<div class="container contact">
<div class="row">
<div class="col-md-3 sug3">
<div class="contact-info">
<h2> Final Marks</h2>

<img src="https://www.aeccglobal.lk/images/2021/06/14/standardized-examinations.webp" width="300" height="300"/>

</div>
</div>


<div class="col-md-9 sug9">
<div class="contact-form">



<div className="form-group"  marginBottom='15px'>

<label class="control-label col-sm-2"> GroupId</label>
<div class="col-sm-10">
<input type="text" 
className="form-control"
  value={inputs.Grp_ID}
 onChange={handleChange}

margin="normal"
InputProps={{
        readOnly: true,
      }} fullWidth
 name="Grp_ID" />
</div>
</div>

<div className="form-group"  marginBottom='15px'>

<label class="control-label col-sm-2">Panel </label>
<div class="col-sm-10">
<input type="text" 
className="form-control"
value={inputs.Panel}
 onChange={handleChange}
margin="normal"
InputProps={{
        readOnly: true,
      }} fullWidth
 name="Panel" />
</div>
</div>




<div className="form-group" marginBottom='15px'>
      <label class="control-label col-sm-2">Finalmarks</label>
      <div class="col-sm-10">
     <input type="number"
       class="form-control"
       value={inputs.Finalmarks}
      onChange={handleChange}
     
       name="Finalmarks"
     />
</div>
</div>




</div>

<button  class="btn btn-dark btn-lg" type="submit" marginBottom='15px'>

&nbsp;
Give Marks</button>




</div>
</div>

</div>
</form>
 )}
</div>
</div>
</div>

  
  )
}

export default Sug_FinalMarks_Assign ;