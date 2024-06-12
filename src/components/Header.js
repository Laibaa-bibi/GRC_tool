import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./logo.png";

const MyHeader = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "darkgrey",
      fontSize: isActive ? "17px" : "15px",
      textDecoration: "none"
    };
  };

  return (
    <div className="head">

        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="logo-text">
  <h4><span className="bold-text">Cansol</span><br /><span className="normal-text">Consulting</span></h4>
</div>


      <div className="head2">
        <NavLink to="/Dashboard" style={navLinkStyles}>Dashboard</NavLink>
        <NavLink to="/Policies" style={navLinkStyles}>Policies</NavLink>
        <NavLink to="/Tasks" style={navLinkStyles}>Tasks</NavLink>
        <NavLink to="/Assessments" style={navLinkStyles}>Assessments</NavLink>
        <NavLink to="/Compliance" style={navLinkStyles}>Compliance</NavLink>
        <NavLink to="/Users" style={navLinkStyles}>Users</NavLink>
        
      </div>
    </div>
  );
};

export default MyHeader;
