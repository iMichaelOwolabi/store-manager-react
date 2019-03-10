import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

const extra = <Button type="submit" className="details">Details</Button>;

const ProductsCard = ({ products }) => {
  if (products) {
    return (
      products.map(product => (
        <Link to={`/products/${product.productid}`} key={product.productid}>
          <Card
          key={product.productid}
          className="products"
          image={product.productimage}
          header={product.productname}
          meta="The most amazing product money can buy"
          description={product.price}
          extra={extra}
        />
        </Link>
      ))
    );
  }
  return <h2 className="noProduct">There are presently no products in the store!</h2>;
};

ProductsCard.propTypes = {
  products: PropTypes.array
};
ProductsCard.defaultProps = {
  products: []
};

export default ProductsCard;
