import React, { Component } from 'react';
import MenuLayoutBox from '../components/Menu/MenuLayoutBox';

class MenuContainer extends Component {
  state = {};

  render () {
    console.log(this.props);
    return (
      <MenuLayoutBox>
        <p>asdr</p>
        <p>asdfasdfasdf</p>
      </MenuLayoutBox>
    );
  }
}

export default MenuContainer;
