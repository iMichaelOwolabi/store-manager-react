import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AuthNav from '../../components/AuthNav';
import './Product.scss';

const Product = () => (
  <Fragment>
    <AuthNav />
    <div className="container">
      <Link to="/create-product">
        <Button basic color="violet" content="Add Product" className="newProduct" />
      </Link>
    </div>
  </Fragment>
);
export default Product;
