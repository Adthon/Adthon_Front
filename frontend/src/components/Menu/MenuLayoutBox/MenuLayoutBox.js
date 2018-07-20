import React from 'react';
import { Link } from 'react-router-dom';

import './MenuLayoutBox.css';

const MenuLayoutBox = ({ children }) => (
  <div className="MenuLayoutBox">
    {' '}
    {children}{' '}
    <Link to="/signIn" className="loginBtn">
      login
    </Link>
  </div>
);

export default MenuLayoutBox;
