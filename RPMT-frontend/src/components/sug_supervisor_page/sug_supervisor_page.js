import React from 'react'
import "./sug_supervisor_page.css"

const Sug_supervioser_page = () => {
  return (
    <div>
        
  
  <header className='headerpanelmembers'>
    
    <div class="left_area">
      <a href='/supervisor'><h3>Supervisor /  <span>Co-Supervisor</span></h3></a>
    </div>
    <div class="right_area">
      <a href="/" class="logout_btn">Logout</a>
    </div>
  </header>
 
 

  <div class="sidebar">
   
    <a href=""><span>Accept Topic</span></a> 
    <a href=""><span>Chat with group</span></a> 
    <a href="/ResDocfileList_givefeedback"><span>  Evaluvate ReserchDoc</span></a>
    <a href="/ThesisFilesList_givefeedback"><span> Evaluvate Thesis </span></a>
    <a href="/MSchemeList"><span> Marking Schemes </span></a>
   
  </div>
  




         
</div>

  )
}

export default Sug_supervioser_page;