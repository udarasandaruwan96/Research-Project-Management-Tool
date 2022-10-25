import React from 'react';
import { NavLink } from 'react-router-dom';

const MarkingSchemeHeader = () => {
  return (
    <div className="header">
      <h1>THESIS Document Submission</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
         SUBMIT MARKING SCHEME
        </NavLink>
        <NavLink activeClassName="active" to="/Thesislist">
          SUBMITTED MARKING SCHEMES
        </NavLink>
      </nav>
    </div>
  );
};

export default MarkingSchemeHeader;