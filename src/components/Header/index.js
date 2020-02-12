import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  const [cardSize, setCardSize] = useState(0);
  const { cart } = useSelector(state => state.cart);
  useEffect(() => {
    setCardSize(cart.length);
  }, [cart]);
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rockshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cardSize} itens</span>
        </div>
        <MdShoppingBasket size={30} color="#fff" />
      </Cart>
    </Container>
  );
}
