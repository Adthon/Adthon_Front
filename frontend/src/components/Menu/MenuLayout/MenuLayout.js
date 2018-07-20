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
    const { user, isAdmin } = this.props;
    console.log(isAdmin == true);
    return (

<div className="bodycontain_nav">
<nav class="navbar navbar-static-top lognav" role="navigation" style={{marginBottom: 0}}>
    <div class="navbar-header">
        <a href="#" class="navbar-brand">Adthon</a>
    </div>
        <ul class="nav navbar-top-links navbar-right">
            
{user ? (
  <li>
    {isAdmin ? <li><Link to="/admin">dashboard</Link> </li>:null}
  <span style={{ marginLeft: 'auto' }}>
    <span>{user.id}</span>
    <Link to="/logout" className="authBtn">
      logout
    </Link>
  </span>
  </li>
) : (
  <li>
  <Link to="/signIn" className="authBtn">
    login
  </Link>
  </li>
)}






          </ul>

      </nav>






</div>






    );
  }
}

export default MenuLayout;
