import { all, call, put, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import {
  loading,
  successAction,
  failureAction,
  breakAction,
} from '../common/actions';
import { requestProductsSucess } from './actions';

function* requestProducts() {
  yield put(loading());
  try {
    const { data } = yield call(api.get, '/products');
    const products = data.map(product => ({
      ...product,
      priceFormattted: formatPrice(product.price),
    }));
    yield put(requestProductsSucess(products));
    yield put(successAction(''));
  } catch (err) {
    yield put(failureAction());
  }
}

export default all([takeLatest('@login/REQUEST_PRODUCTS', requestProducts)]);
