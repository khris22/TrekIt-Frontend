import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='ui secondary menu'>
          <NavLink to='/' className='content'>
            <Button color='blue'>Home</Button>
          </NavLink>

          <NavLink to='/locations' className='content'>
            <Button color='blue'>Your Dashboard</Button>
          </NavLink>

          <NavLink to='/about' className='content'>
            <Button color='blue'>About</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
