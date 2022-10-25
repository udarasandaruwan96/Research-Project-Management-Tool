import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import StudentHomePage_shv from "./components/shv_student_Home/shv_student_home";
import Shv_rs_add_rs_topic from "./components/shv_rs_topic/shv_rs_add_rs_topic";
import Shv_rs_topics_student from "./components/shv_rs_topic/shv_rs_topics_student";
import Shv_rs_topic_details_update from "./components/shv_rs_topic/shv_rs_topic_details_update";

import Shv_rs_topics_supervisor from "./components/shv_rs_topic/shv_rs_topics_supervisor";

import Shv_res_topic_notice_admin_add from "./components/shv_submission_notices/shv_res_topic_notice_admin_add";
import Shv_res_topic_notices_admin from "./components/shv_submission_notices/shv_res_topic_notices_admin";
import Shv_res_topic_notice_admin_update from "./components/shv_submission_notices/shv_res_topic_notice_admin_update";

import Shv_res_topic_notices_student from "./components/shv_submission_notices/shv_res_topic_notices_student";

import Sug_page from "./components/sug_page";
import Sug_AllPanels from "./components/sug_panel/sug_AllPanel";
import Sug_CreatePanel from "./components/sug_panel/Sug_CreatePanel";
import FirstPage from "./components/sug_FirstPage/sug_FirstPage";

import TopicHeader from "./components/shv_rs_topic_file/shv_topic_file_header";
import TopicHome from "./components/shv_rs_topic_file/shv_topic_file_home";
import TopicFilesList from "./components/shv_rs_topic_file/shv_topic_file_list";

import ResDocFilesList from "./components/shv_rs_res_document/shv_ResDocFilesList";
import ResDocHeader from "./components/shv_rs_res_document/shv_ResDocHeader";
import ResDocHome from "./components/shv_rs_res_document/shv_ResDocHome";

import ThesisDocHome from "./components/shv_rs_thesis_document/shv_ThesisDocHome";
import ThesisDocHeader from "./components/shv_rs_thesis_document/shv_ThesisDocHeader";
import ThesisDocFilesList from "./components/shv_rs_thesis_document/shv_ThesisDocFilesList";

import MarkingSchemeHome from "./components/shv_rs_admin_marking_scheme/shv_marking_scheme_home";
import MarkingSchemeHeader from "./components/shv_rs_admin_marking_scheme/shv_marking_scheme_header";
import MarkingSchemeList from "./components/shv_rs_admin_marking_scheme/shv_marking_scheme_List";

import TemplateHome from "./components/shv_rs_admin_templates/shv_template_home";
import TemplateHeader from "./components/shv_rs_admin_templates/shv_template_header";
import TemplateList from "./components/shv_rs_admin_templates/shv_template_List";

import Sug_Resdoc_addfeedback from "./components/sug_resdoc_feedback/sug_resdoc_add_feedback";
import Sug_AllResdocfeedbacks from "./components/sug_resdoc_feedback/sug_Allresdoc_feedbacklist";
import Sug_Resdoc_updatefeedback from "./components/sug_resdoc_feedback/sug_resDocfeedbackupdate";

import Sug_Topicdoc_addfeedback from "./components/sug_topicdoc_feedback/sug_topicdoc_addfeedback";
import Sug_AllTopicdocfeedbacks from "./components/sug_topicdoc_feedback/sug_AllTopicfeedbcklist";
import Sug_Topicdoc_updatefeedback from "./components/sug_topicdoc_feedback/sug_topicFeedbackupdate";
import Sug_Thesisdoc_addfeedback from "./components/sug_thesisdoc_feedback.js/sug_thesis_addfeedback";
import Sug_AllThesisdocfeedbacks from "./components/sug_thesisdoc_feedback.js/sug_Allthesis_feedbacks";
import Sug_thesis_updatefeedback from "./components/sug_thesisdoc_feedback.js/sug_thesisfeedback_update";
import Th_Group_Reg from "./components/th_group_registration/th_group_registration";
import Th_AllGroups from "./components/th_group_registration/th_Allgroups";
import Sug_AllGroups_admin from "./components/sug_Assign_GrpID_&_panel/sug_All_assigned_grp_admin";

import Sug_GroupID_and_Panel_Assign from "./components/sug_Assign_GrpID_&_panel/sug_Assign_GrpID_&_panel";
import Sug_AllGroups_Mark from "./components/sug_panal_uplodemarks/sug_AllGroupsmarks";
import Sug_FinalMarks_Assign from "./components/sug_panal_uplodemarks/sug_GiveMarks";
import Sug_ResDocFilesList from "./components/sug_resdoc_feedback/sug_resdocfilelist";
import Sug_TopicFilesList from "./components/sug_topicdoc_feedback/sug_topic_file_list";
import Sug_ThesisDocFilesList from "./components/sug_thesisdoc_feedback.js/sug_thesisdoc_list";

//...........udara............
import UD_Login from "./components/Login/UD_Login";
import UD_SignUp from "./components/SignUp/UD_SignUp";
import UD_Student from "./components/Student/UD_Student";

import UD_PenalLogin from "./components/UD_PenalLogin/UD_PenalLogin";
import UD_PenalSignUp from "./components/UD_PenalSignUp/UD_PenalSignUp";
import UD_Penalmember from "./components/Penalmember/UD_Penalmember";

import UD_SuperLogin from "./components/UD_SuperLogin/UD_SupervisorLogin";
import UD_SuperSignUp from "./components/Ud_SuperSignUp/UD_SuperSignUp";
import UD_Supervisor from "./components/Supervisor/UD_Supervisor";

import UD_Dashboard from "./components/Dashboard/UD_Dashboard";

import Shv_admin_notice_home from "./components/shv_submission_notices/shv_admin_notice_home";
import Footer from "./components/shv_Footer/shv_footer";
import Header from "./components/shv_Header/shv_header";
import Sug_student_AllTopicdocfeedbacks from "./components/sug_topicdoc_feedback/sug_student_topicdoc_feedbackALL";
import Sug_student_AllThesisdocfeedbacks from "./components/sug_thesisdoc_feedback.js/sug_student_thesis_doc_feedbackALL";

import Sug_student_resdoc_feedbackALL from "./components/sug_resdoc_feedback/sug_student_resdoc_feedbackALL";

function App() {
  return (
    <div>
    <React.Fragment>
    <div>
    <Header/>
      <main> 
        <Routes>

          {/* Shavinda */}
          <Route path="/" element={<FirstPage />} exact />
          <Route path="/shv_page" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/addRsTopics" element={<Shv_rs_add_rs_topic />} exact />
          <Route path="/RsTopics" element={<Shv_rs_topics_student />} exact />
          <Route path="/RsTopics/:id" element={<Shv_rs_topic_details_update />}exact/>
          <Route path="/RsTopicsSupervisor" element={<Shv_rs_topics_supervisor />}exact/>
          <Route path="/addRsTopicsNotice" element={<Shv_res_topic_notice_admin_add />} exact/>
          <Route path="/RsTopicsNotices"element={<Shv_res_topic_notices_admin />}exact/>
          <Route path="/RsTopicsNotice/:id" element={<Shv_res_topic_notice_admin_update />} exact />
          <Route path="/RsTopicsNoticeAdminHome" element={< Shv_admin_notice_home />} exact />
          <Route path="/RsTopicsNotice/:id" element={<Shv_res_topic_notice_admin_update />}exact/>
          <Route path="/RsTopicsNoticesStudent" element={<Shv_res_topic_notices_student />} exact/>
          <Route path="/RsTopicFileHome" element={<TopicHome />} exact />
          <Route path="/RsTopicFileHeader" element={<TopicHeader />} exact />
          <Route path="/RsTopiFileList" element={<TopicFilesList />} exact />
          <Route path="/RsDocHome" element={<ResDocHome />} exact />
          <Route path="/RsDocHeader" element={<ResDocHeader />} exact />
          <Route path="/RsDocFilesList" element={<ResDocFilesList />} exact />
          <Route path="/ThesisHome" element={<ThesisDocHome />} exact />
          <Route path="/ThesisHeader" element={<ThesisDocHeader />} exact />
          <Route path="/ThesisFilesList" element={<ThesisDocFilesList />} exact/>
          <Route path="/MSchemeHome" element={<MarkingSchemeHome />} exact />
          <Route path="/MSchemeHeader" element={<MarkingSchemeHeader />}exact/>
          <Route path="/MSchemeList" element={<MarkingSchemeList />} exact />
          <Route path="/TemplateHome" element={<TemplateHome />} exact />
          <Route path="/TemplateHeader" element={<TemplateHeader />} exact />
          <Route path="/TemplateList" element={<TemplateList />} exact />
          <Route path="/StdHome" element={<StudentHomePage_shv />} exact />


          {/* Sugandhi */}
          <Route path="/TopicfileList_givefeedback" element={<Sug_TopicFilesList/>} exact />
          <Route path="/ResDocfileList_givefeedback" element={<Sug_ResDocFilesList/>} exact />
          <Route path="/ThesisFilesList_givefeedback" element={<Sug_ThesisDocFilesList/>} exact />
          <Route path="/sug_page" element={<Sug_page />} exact />
          <Route path="/allPanel" element={<Sug_AllPanels />} exact />
          <Route path="/createPanel" element={<Sug_CreatePanel />} exact />
          <Route path="/ResDocFeedback/:id"element={<Sug_Resdoc_addfeedback />}exact />
          <Route path="/AllResDocFeedback" element={<Sug_AllResdocfeedbacks />}exact/>
          <Route path="/AllResDocFeedback/:id" element={<Sug_Resdoc_updatefeedback />} exact/>

          <Route path="/student_AllTopicdocfeedbacks" element={<Sug_student_AllTopicdocfeedbacks />} exact/>
          <Route path="/student_AllThesisdocfeedbacks" element={<Sug_student_AllThesisdocfeedbacks />} exact/>
          <Route path="/student_resdoc_feedbackALL" element={<Sug_student_resdoc_feedbackALL/>} exact/>
          <Route
            path="/AllTopicFilesList/:id"
            element={<Sug_Topicdoc_addfeedback />}
            exact
          />
          <Route
            path="/AllTopicDocFeedback"
            element={<Sug_AllTopicdocfeedbacks />}
            exact
          />
          <Route
            path="/AllTopicDocFeedback/:id"
            element={<Sug_Topicdoc_updatefeedback />}
            exact
          />

          <Route
            path="/ThesisFilesList/:id"
            element={<Sug_Thesisdoc_addfeedback />}
            exact
          />
          <Route
            path="/AllThesisFeedback"
            element={<Sug_AllThesisdocfeedbacks />}
            exact
          />
          <Route
            path="/AllThesisFeedback/:id"
            element={<Sug_thesis_updatefeedback />}
            exact
          />

          <Route path="/group_reg" element={<Th_Group_Reg />} exact />
          <Route path="/All_groups" element={<Th_AllGroups />} exact />

          <Route
            path="/All_groups_admin"
            element={<Sug_AllGroups_admin />}
            exact
          />
          <Route
            path="/All_groups_admin/:id"
            element={<Sug_GroupID_and_Panel_Assign />}
            exact
          />

          <Route
            path="/All_groups_marks"
            element={<Sug_AllGroups_Mark />}
            exact
          />
          <Route
            path="/All_groups_marks/:id"
            element={<Sug_FinalMarks_Assign />}
            exact
          />

          {/* .............udara.............................. */}
          {/* ........................................... */}
          <Route path="/login" element={<UD_Login />} exact />
          <Route path="/signup" element={<UD_SignUp />} exact />
          {/* student dashbord */}
          <Route path="/student" element={<UD_Student />} exact />

          <Route path="/penalmemberlogin" element={<UD_PenalLogin />} exact />
          <Route path="/penalmembersignup" element={<UD_PenalSignUp />} exact />
          {/* penalmember dashbord */}
          <Route path="/penalmember" element={<UD_Penalmember />} exact />

          <Route path="/supervisorlogin" element={<UD_SuperLogin />} exact />
          <Route path="/supervisorsignup" element={<UD_SuperSignUp />} exact />
          {/* supervisor dashbord */}
          <Route path="/supervisor" element={<UD_Supervisor />} exact />
          {/* admin dashbord */}
          <Route path="/dashboard" element={<UD_Dashboard />} exact />
          
        </Routes>
      </main>  
      </div>
    </React.Fragment>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
  );
}

export default App;
