import React, { Fragment } from 'react';
import AuthNav from '../../../components/AuthNav';
import './NewProduct.scss';
import { productValidator } from '../../../helpers/validator';
import imageUpload from '../../../helpers/imageUpload';

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        productName: '',
        price: '',
        quantity: '',
        minQuantity: '',
        productImage: ''
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageUpload = async (event) => {
    const { product } = this.state;
    const file = event.target.files[0];
    const response = await imageUpload(file);
    product.productImage = response.data.secure_url.toString();
    this.setState({
      product
    });
  };

  handleChange(event) {
    const { product } = this.state;
    const { name, value } = event.target;
    product[name] = value;
    this.setState({
      product
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { product } = this.state;
    const errors = productValidator(product);
    if (errors) {
      return this.setState({ errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <AuthNav />
        <div className="container">
          <section className="create-product">
            <h2>Add Product</h2>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="productName" placeholder="Product Name" required onChange={this.handleChange} />
              <div className="error">{errors.productName}</div>
              <input type="number" name="price" placeholder="Price" required onChange={this.handleChange} />
              <div className="error">{errors.price}</div>
              <input type="number" name="quantity" placeholder="Quantity" required onChange={this.handleChange} />
              <div className="error">{errors.quantity}</div>
              <input type="number" name="minQuantity" placeholder="Minimum Inventory Quantity" required onChange={this.handleChange} />
              <div className="error">{errors.minQuantity}</div>
              <p>Upload Product Image</p>
              <input type="file" className="upload" name="productImage" onChange={this.handleImageUpload} />
              <div className="error">{errors.productImage}</div>
              <button type="submit" name="submit" className="">Create Product</button>
            </form>
          </section>
        </div>
      </Fragment>
    );
  }
}
export default NewProduct;
