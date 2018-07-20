import React from 'react';
import { Link } from 'react-router-dom';

import './MenuLayout.css';

class MenuLayout extends React.Component {
  render () {
    const { user } = this.props;
    console.log(user);
    return (
      <div className="MenuLayoutBox">
        Logo
        {user ? (
          <p style={{ marginLeft: 'auto' }}>{user.id}</p>
        ) : (
          <Link to="/signIn" className="loginBtn">
            login
          </Link>
        )}
      </div>
    );
  }
}

export default MenuLayout;
