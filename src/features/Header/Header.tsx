import * as React from 'react';
import { Nav } from '..';
import { Heading, Link, Spacer } from '../../components';
import './Header.scss';

const Header = () => (
  <header>
    <div className="Header--Content">
      <Link className="Name" hideUnderline to="/">
        <Heading>{'🐴🚗'}</Heading>
      </Link>
      <Spacer />
      <Nav />
    </div>
  </header>
);

export default Header;
