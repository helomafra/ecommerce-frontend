import { Container } from './styles';

import { Header } from '../../components/Header';
import { CartItem } from '../../components/CartItem';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

export function Cart() {
  const [cartItem, setCartItem] = useState([]);

  async function getCartItem() {
    const response = await api.get(`/cart`);
    setCartItem(response.data);
  }

  useEffect(() => {
    getCartItem();
  }, []);

  let total = cartItem.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price * currentValue.amount;
  }, 0);

  return (
    <Container>
      <Header />

      <main>
        <div className="cart">
          <h2>Carrinho</h2>

          {cartItem.map((item) => (
            <CartItem key={item.productId} data={item} refetch={getCartItem} />
          ))}
        </div>

        <div className="form">
          <h2>Entrega</h2>

          <div className="info">
            <label>Insira seu nome</label>
            <Input placeholder="Seu nome" />

            <label>Selecione a data de entrega</label>
            <Input type="date" />
          </div>

          <div className="total-value">
            <p>Valor total</p>

            <p>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </p>
          </div>

          <Button title="Finalizar compra" type="primary" />
        </div>
      </main>
    </Container>
  );
}
