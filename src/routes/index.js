import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Product from '../container/Product';
import Sales from '../components/Sales';
import Attendants from '../components/Attendant';
import Cart from '../components/Cart';
import NewProduct from '../container/Product/NewProduct';
import NotFound from '../components/NotFound';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/',
  },
  {
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    path: '/dashboard',
  },
  {
    name: 'product',
    component: Product,
    exact: true,
    path: '/products',
  },
  {
    name: 'new product',
    component: NewProduct,
    exact: true,
    path: '/create-product',
  },
  {
    name: 'sales',
    component: Sales,
    exact: true,
    path: '/sales',
  },
  {
    name: 'attendant',
    component: Attendants,
    exact: true,
    path: '/attendants',
  },
  {
    name: 'cart',
    component: Cart,
    exact: true,
    path: '/cart',
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*',
  },
];
