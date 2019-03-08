import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import '../NavBar/NavBar.scss';

export default function AuthNav() {
  return (
    <Fragment>
      <header>
        <ToastContainer autoClose={5000} />
        <div className="container">
          <div id="logo">
            <h1>Store Manager</h1>
          </div>
          <nav>
            <ul>
              <Link to="/dashboard" className="navbar">Dashboard</Link>
              <Link to="/products" className="navbar">Products</Link>
              <Link to="/sales" className="navbar">Sales</Link>
              <Link to="/attendants" className="navbar">Attendants</Link>
              <Link to="/" className="navbar">Logout</Link>
              <Icon name="shop" className="cart" size="large" />
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}
