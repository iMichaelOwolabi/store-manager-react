import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h2>Page Not Found!</h2>
        </div>
        <Link to="/">
          <h2>Back to Homepage</h2>
        </Link>
      </div>
    </div>
  );
}
