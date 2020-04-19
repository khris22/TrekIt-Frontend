import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        {/* <NavLink to='/'>Home</NavLink> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/locations'>Your Dashboard</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    );
  }
}

export default Navbar;
