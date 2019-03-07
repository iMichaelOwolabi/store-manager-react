import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NavBar.scss';

export default function Navbar() {
  return (
    <Fragment>
      <header>
        <ToastContainer autoClose={5000} />
        <div className="container">
          <div id="logo">
            <h1>Store Manager</h1>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
