import React from 'react';
import { Link } from 'react-router-dom';

import './MenuLayout.css';

class MenuLayout extends React.Component {
  state = {
    prevScrollpos: 0,
    top: 0
  };

  componentDidMount () {
    window.onscroll = () => {
      const currentScrollpos = window.pageYOffset;
      if (this.state.prevScrollpos < currentScrollpos) {
        this.setState({
          prevScrollpos: currentScrollpos,
          top: '-100px'
        });
      } else {
        this.setState({
          prevScrollpos: currentScrollpos,
          top: '0'
        });
      }
    };
  }

  render () {
    const { user } = this.props;
    return (
      <div className="MenuLayoutBox" style={{ top: this.state.top }}>
        Logo
        {user ? (
          <span style={{ marginLeft: 'auto' }}>
            <span>{user.id}</span>
            <Link to="/logout" className="authBtn">
              logout
            </Link>
          </span>
        ) : (
          <Link to="/signIn" className="authBtn">
            login
          </Link>
        )}
      </div>
    );
  }
}

export default MenuLayout;
