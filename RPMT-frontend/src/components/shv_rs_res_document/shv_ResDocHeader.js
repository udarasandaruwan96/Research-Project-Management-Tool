import React from 'react';
import { NavLink } from 'react-router-dom';

const ResDocHeader = () => {
  return (
    <div className="header">
      <h1>Research Document Submission</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
         SUBMIT RESEARCH DOCUMENT
        </NavLink>
        <NavLink activeClassName="active" to="/TopicDoclist">
          SUBMITTED DOCUMENTS
        </NavLink>
      </nav>
    </div>
  );
};

export default ResDocHeader;