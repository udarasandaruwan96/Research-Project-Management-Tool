import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import { useNavigate } from "react-router-dom";





const Th_Group_Reg = () => {
   


    const history = useNavigate();
    const [inputs, setInputs] = useState({
      
        Grp_Leader:"",
        Grp_member2:"",
        Grp_member3:"",
        Grp_member4:"",
        Grp_ID:" ",
            Panel:" ",
            Finalmarks :" "
      
  
    });
    
    //const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/group", {
            Grp_Leader: String(inputs.Grp_Leader),
            Grp_member2: String(inputs.Grp_member2),
            Grp_member3: String(inputs.Grp_member3),
            Grp_member4: String(inputs.Grp_member4),
            Finalmarks :String(" "),
            Grp_ID:String(" "),
            Panel:String(" "),
            
          
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history("/sug_page"));
    };
  
    
    

  return (
   <div id="sug_createPanel">
<form onSubmit={handleSubmit} >

<h1>Group Registation</h1>
<div className='contain'>

      
<label >Group_Leader</label>      
<input type="text"
 name="Grp_Leader" 
 placeholder="Grp_Leader"
 value={inputs.Grp_Leader}
 onChange={handleChange}
 />


</div>

<div className='contain'>

      
<label >Grp_member2</label>      
<input type="text"
 name="Grp_member2" 
 placeholder="Grp_member2"
 value={inputs.Grp_member2}
 onChange={handleChange}
 />


</div>
<div className='contain'>

      
<label >Grp_member3</label>      
<input type="text"
 name="Grp_member3" 
 placeholder="Grp_member3"
 value={inputs.Grp_member3}
 onChange={handleChange}
 />


</div>
<div className='contain'>

      
<label >Grp_member4</label>      
<input type="text"
 name="Grp_member4" 
 placeholder="Grp_member4"
 value={inputs.Grp_member4}
 onChange={handleChange}
 />


</div>









     <br/>
     <button type="submit">submit</button>
     </form>
     </div>

  
  )
}

export default Th_Group_Reg;