import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to={`/courses`}>
        <h1 className="orgName">Courses</h1>
      </Link>
    </div>
  );
}

export default Navbar;
