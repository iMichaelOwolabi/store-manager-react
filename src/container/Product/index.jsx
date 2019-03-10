import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AuthNav from '../../components/AuthNav';
import './Product.scss';
import ProductsCard from './ProductsCard';
import { getAllProducts } from '../../actions/productActions';

class Product extends React.Component {
  componentDidMount() {
    const getProducts = () => {};
    getProducts();
  }

  render() {
    const { product } = this.props;
    if (!product) { window.location.reload(); }
    return (
      <Fragment>
        <AuthNav />
        <div className="wrapper">
          <div className="fullWidth">
            <Link to="/create-product">
              <Button basic color="violet" content="Add Product" className="newProduct" />
            </Link>
          </div>
          <ProductsCard products={product.get.products} />
        </div>
      </Fragment>
    );
  }
}

Product.propTypes = {
  product: PropTypes.array
};
Product.defaultProps = {
  product: []
};

const mapDispatchToProps = dispatch => ({
  getProducts: dispatch(getAllProducts())
});

const mapStateToProps = state => ({
  product: state.productReducer
});

export { Product as theProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Product);
