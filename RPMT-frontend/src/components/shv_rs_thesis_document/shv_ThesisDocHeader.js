import React from 'react';
import { NavLink } from 'react-router-dom';

const ThesisDocHeader = () => {
  return (
    <div className="header">
      <h1>THESIS Document Submission</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
         SUBMIT THESIS DOCUMENT
        </NavLink>
        <NavLink activeClassName="active" to="/Thesislist">
          SUBMITTED DOCUMENTS
        </NavLink>
      </nav>
    </div>
  );
};

export default ThesisDocHeader;