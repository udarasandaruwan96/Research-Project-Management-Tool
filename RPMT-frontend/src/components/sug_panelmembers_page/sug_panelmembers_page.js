import React from 'react'
import "./sug_panelmembers_page.css"
const sug_panelmembers_page = () => {
  return (
    <div>
        
  
  <header className='headerpanelmembers'>
    
    <div class="left_area">
      <a href='/penalmember'><h3>Panel  <span> members</span></h3></a>
    </div>
    <div class="right_area">
      <a href="/" class="logout_btn">Logout</a>
    </div>
  </header>
 
 

  <div class="sidebar">
   
    <a href="/allPanel"><span> <i class="fa fa-users" aria-hidden="true"></i> All Panels</span></a> 
    <a href="/TopicfileList_givefeedback"><span><i class="fa fa-file-text" aria-hidden="true"></i> Topic Doc feedback </span></a>
    <a href="/All_groups_marks"><span><i class="fa fa-trophy"  aria-hidden="true"></i> Uplode Marks</span></a>
  </div>
  


         
</div>

  )
}

export default sug_panelmembers_page