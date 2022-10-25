import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate ,useParams} from "react-router-dom";
import swal from 'sweetalert';

const Sug_GroupID_and_Panel_Assign = () => {
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
        if(inputs.Grp_Leader.length == 0 || inputs.Grp_member2.length == 0 || inputs.Grp_member3.length == 0 ||inputs.Grp_member4.length == 0||inputs.Grp_ID.length == 0 ||inputs.Panel.length == 0 ){
         
          swal("Feilds Cannot Be empty !!", "You Must fill all the feilds !!", "error");

        }else{await axios
          .put(`http://localhost:5000/group/${id}`, {
            Grp_Leader: String(inputs.Grp_Leader),
            Grp_member2: String(inputs.Grp_member2),
            Grp_member3: String(inputs.Grp_member3),
            Grp_member4: String(inputs.Grp_member4),
            Grp_ID:String(inputs.Grp_ID),
            Panel:String(inputs.Panel)
          })
          .then((res) => res.data).then(() => history("/All_groups_admin"));}
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest();
      };
   


 
  
    
    

  return (
     
<div>
      <div>
 
   <div>

      {inputs && (
 <form onSubmit={handleSubmit} >

<div class="container">
<div class="row">
<div class="col-md-3 sug3">
<div class="contact-info">
<h2> Assign Group ID and Panel for Groups</h2>

<img src="../../assets/images/groupicon.png" width="200" height="200"/>

</div>
</div>


<div class="col-md-9 sug9">
<div class="contact-form">

<div className="form-group"  marginBottom='15px'>
<label>Group_Leader</label>
<input type="text" 
className="form-control"
 name="Grp_Leader" 
placeholder="Grp_Leader"
value={inputs.Grp_Leader}
onChange={handleChange} 
    />
     
</div>

 

<div className="form-group"  marginBottom='15px'>     
 <label >Grp_member2</label> 
<input type="text"
name="Grp_member2" 
className="form-control"
 placeholder="Grp_member2"
  value={inputs.Grp_member2}
  onChange={handleChange}
 />

</div>


<div className="form-group"  marginBottom='15px'>  
 <label >Grp_member3</label>   
  <input type="text"
 name="Grp_member3" 
 className="form-control"
 placeholder="Grp_member3"
 value={inputs.Grp_member3}
 onChange={handleChange}
 />
</div>


<div className="form-group"  marginBottom='15px'>     
<label >Grp_member4</label>      
<input type="text"
 name="Grp_member4" 
 className="form-control"
 placeholder="Grp_member4"
 value={inputs.Grp_member4}
 onChange={handleChange}
 />
</div>

<div className="form-group"  marginBottom='15px'>    
 <label >Group_ID</label>  
<input type="text"
 name="Grp_ID" 
 className="form-control"
 placeholder="Grp_ID"
 value={inputs.Grp_ID}
 onChange={handleChange}
 />
</div>


<div className="form-group"  marginBottom='15px'> 
<label >Panel</label>      
<input type="text"
 className="form-control"
 name="Panel" 
placeholder="Panel"
 value={inputs.Panel}
 onChange={handleChange}
 />     
</div>






</div>

<button  class="btn btn-dark btn-lg" type="submit" marginBottom='15px'>

&nbsp;
Save</button>




</div>
</div>
<br/>
<a href='All_groups_admin'><button  className='btn btn-outline-dark btn-lg'>privious</button></a>
</div>

</form>
 )}

</div>
</div>
</div>
  )
}

export default Sug_GroupID_and_Panel_Assign ;