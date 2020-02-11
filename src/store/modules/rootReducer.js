import { combineReducers } from 'redux';
import common from './common/reducers';
import products from './products/reducers';
import cart from './cart/reducers';

export default combineReducers({ common, products, cart });
