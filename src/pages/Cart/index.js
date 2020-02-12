import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const [cardSize, setCardSize] = useState(0);
  const { cart } = useSelector(state => state.cart);
  useEffect(() => {
    setCardSize(cart.length);
  }, [cart]);
  return (
    <>
      {cart.length === 0 ? null : (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            {cart.map(itens => (
              <tbody>
                <tr>
                  <td>
                    <img src={itens.image} alt="shoesCart" />
                  </td>
                  <td>
                    <strong>{itens.title}</strong>
                    <span>{itens.priceFormattted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={itens.amount} />
                      <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>

                  <td>
                    <strong>R$ 258,80</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </ProductTable>

          <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
              <span>TOTAL:</span>
              <strong>R$1229,00</strong>
            </Total>
          </footer>
        </Container>
      )}
    </>
  );
}
