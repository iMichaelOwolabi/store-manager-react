import React, { Fragment } from 'react';
import './NavBar.scss';

export default function Navbar() {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div id="logo">
            <h1>Store Manager</h1>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
