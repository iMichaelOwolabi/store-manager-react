/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import { Header, Table, Image } from 'semantic-ui-react';
import AuthNav from '../../../components/AuthNav';
import './Cart.scss';

const choiceProduct = JSON.parse(sessionStorage.getItem('cart'));

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        quantity: sessionStorage.getItem('qty')
      }
    };
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

  render() {
    const { products } = this.state;
    return (
      <Fragment>
        <AuthNav />
        <div className="wrapper">
          <div className="cartHeader" />
          <h2 className="topSpace">Your Shopping Cart</h2>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>S/N</Table.HeaderCell>
                <Table.HeaderCell>Picture</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h2">1</Header>
                </Table.Cell>
                <Table.Cell>
                  <Image src={choiceProduct.productimage} rounded size="mini" />
                </Table.Cell>
                <Table.Cell><input type="number" value={products.quantity} name="quantity" className="qty" onChange={this.handleChange} /></Table.Cell>
                <Table.Cell>&#8358; {choiceProduct.price}</Table.Cell>
                <Table.Cell>
                  &#8358;
                  {parseFloat(choiceProduct.price * products.quantity)}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <button type="submit" className="salesButton">Make Sales</button>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
