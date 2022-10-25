import React,{ useState }  from 'react';
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Sug_page=()=>{
    const [value, setValue] = useState();
    return<div>

     <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
         <Toolbar>
         <Typography> Panelmembers</Typography>

         <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/createPanel" label="Create Panel" />
            <Tab LinkComponent={NavLink} to="/allPanel" label="All Panel" />
            
          </Tabs>
         </Toolbar>
       
     </AppBar>

     <a href="/ResDocfileList_givefeedback"> <Button  > ResDoc list </Button></a> 
     <a href="/AllResDocFeedback"> <Button  > ResDoc feedback list</Button></a> 
<br></br>

     <a href="/TopicfileList_givefeedback"> <Button  > Topic Doc list </Button></a> 
     <a href="/AllTopicDocFeedback"> <Button  > Topic Doc feedback list</Button></a> 
<br></br>
     <a href="/ThesisFilesList_givefeedback"> <Button  > Thesis  list </Button></a> 
     <a href="/AllThesisFeedback"> <Button  > Thesis feedback list</Button></a> 
      <br></br>
      <br></br>
<br></br>
     <a href="/group_reg"> <Button  > Group register Student(Thamodi) (see only students)</Button></a>
     <br/> 
     <a href="/All_groups"> <Button  > Group DEtails (Thamodi)(see only students)</Button></a>
     <br/>

      <a href="/All_groups_admin"> <Button  > All Groups(Assign group ID and Panal) (admin can see)   </Button></a>
      <br/>
     <a href="/All_groups_marks"> <Button  >All Groups marks (Panalmembers only can see this)</Button></a> 
     



     <a href="/Sug_supervioser_page"> <Button  >Supervisor</Button></a> 
     <a href="/Sug_panelmembers_page"> <Button  >Panelmember</Button></a> 
    </div>
};

export default Sug_page;