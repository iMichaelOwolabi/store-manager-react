const addToCart = (product) => {
  sessionStorage.setItem('cart', JSON.stringify(product));
};
export default addToCart;
