import React from 'react';
import { NavLink } from 'react-router-dom';

const TemplateHeader = () => {
  return (
    <div className="header">
      <h1>Document Templates Submission</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
         SUBMIT Templates
        </NavLink>
        <NavLink activeClassName="active" to="/Thesislist">
          SUBMITTED Templates
        </NavLink>
      </nav>
    </div>
  );
};

export default TemplateHeader;