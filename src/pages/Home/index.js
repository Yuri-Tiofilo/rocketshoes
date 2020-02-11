import React, { useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionsProducts from '../../store/modules/products/actions';
import * as ActionsCart from '../../store/modules/cart/actions';
import { ProductList } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.common);
  const { products } = useSelector(state => state.products);
  const { cart } = useSelector(state => state.cart);
  console.tron.log(cart);

  useEffect(() => {
    dispatch(ActionsProducts.requestProducts());
  }, []); //eslint-disable-line
  function addToCart(product) {
    dispatch(ActionsCart.requestAddProduct(product));
  }
  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="shoes" />
          <strong>{product.title}</strong>
          <span>{product.priceFormattted}</span>
          <button
            type="button"
            onClick={() => {
              addToCart(product);
            }}
          >
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
