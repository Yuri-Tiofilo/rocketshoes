import { combineReducers } from 'redux';
import common from './common/reducers';
import products from './products/reducers';

export default combineReducers({ common, products });
