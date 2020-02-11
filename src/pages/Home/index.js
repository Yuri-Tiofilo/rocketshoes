import React, { useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionsProducts from '../../store/modules/products/actions';
import { ProductList } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.common);
  const { products } = useSelector(state => state.products);
  console.tron.log(products);
  console.tron.log(loading);
  useEffect(() => {
    console.tron.log('entrou');
    dispatch(ActionsProducts.requestProducts());
    }, []); //eslint-disable-line
  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="shoes" />
          <strong>{product.title}</strong>
          <span>{product.priceFormattted}</span>
          <button type="button">
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
