import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import AuthNav from '../../../components/AuthNav';
import './ViewProduct.scss';
import { getSingleProduct } from '../../../actions/productActions';
import addToCart from '../../../helpers/addToCart';
import { addToCartMessage } from '../../../constants';


class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        quantity: 1,
      },
    };
  }

  componentDidMount() {
    const { history, getProduct } = this.props;
    const id = history.location.pathname.split('/')[2];
    getProduct(id);
  }

  handleChange = (event) => {
    const { products } = this.state;
    const { name, value } = event.target;
    products[name] = value;
    this.setState({
      products
    });
    sessionStorage.setItem('qty', products.quantity);
  }

  handleAddToCart = () => {
    const { product } = this.props;
    const choiceProduct = product.theProduct.product;
    addToCart(choiceProduct);
    toast.success(addToCartMessage);
    window.location.reload();
  }

  render() {
    const { products } = this.state;
    const { product } = this.props;
    return (
      <Fragment>
        <AuthNav />
        <div className="wrapper">
          <section className="productDetails">
            <img className="productImage" src={product.theProduct.product.productimage} alt="" />
            <div className="details">
              <h1>{product.theProduct.product.productname}</h1>
              <p className="productInfo">
            Qty:
                <input type="number" value={products.quantity} className="quantity" onChange={this.handleChange} name="quantity" />
              </p>
              <p className="productInfo">
                Price:
                <span className="moveRight">
                &#8358;
                  {product.theProduct.product.price}
                </span>
              </p>
              <p className="productInfo">
              Available Quantity:
                <span className="moveRight">{product.theProduct.product.quantity}</span>
              </p>
              <p className="productInfo">
              Minimum Qty:
                <span className="moveRight">{product.theProduct.product.mininventoryqty}</span>
              </p>
              <button className="productBtn" type="submit" onClick={this.handleAddToCart}>Add to Cart</button>
              <button className="productBtn" type="submit">Modify</button>
              <button className="deleteButton" type="submit">Delete</button>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

ViewProduct.propTypes = {
  history: PropTypes.object,
  getProduct: PropTypes.func,
  product: PropTypes.object
};
ViewProduct.defaultProps = {
  history: {},
  getProduct: null,
  product: {}
};

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getSingleProduct(id))
});

const mapStateToProps = state => ({
  product: state.productReducer
});

export { ViewProduct as ViewSingleProduct };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProduct);
