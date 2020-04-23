import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Button>
            <NavLink to='/'>Home</NavLink>
          </Button>
          <Button>
            <NavLink to='/locations'>Your Dashboard</NavLink>
          </Button>
          <Button>
            <NavLink to='/about'>About</NavLink>
          </Button>
        </Menu>
        <br />
      </div>
    );
  }
}

export default Navbar;
