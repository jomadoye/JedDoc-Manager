import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a to="/" className="navbar-brand">
            Jed-Red Dice
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a to="/signup">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}