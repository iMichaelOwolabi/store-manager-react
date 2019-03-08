import React, { Fragment } from 'react';
import AuthNav from '../AuthNav';

const Dashboard = () => (
  <Fragment>
    <AuthNav />
    <div className="container">
      <h1>Welcome to your dashboard</h1>
    </div>
  </Fragment>
);
export default Dashboard;
