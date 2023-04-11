import { useState, useEffect } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { CartItem } from '../../components/CartItem';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import emptyCart from '../../assets/empty-cart.svg';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { api } from '../../services/api';

export function Cart() {
  const [cartItem, setCartItem] = useState([]);
  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);

  const navigate = useNavigate();

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

  async function handleNewOrder() {
    if (!name) {
      return toast.error('Digite seu nome.');
    }

    if (!date) {
      return toast.error('Selecione uma data de entrega futura!');
    }

    if (!cartItem) {
      return toast.error('Selecione ao menos um item para finalizar a compra.');
    }

    try {
      await api.post('/orders', {
        user_name: name,
        delivery_date: date,
        products: cartItem
      });

      toast.success('Pedido criado com sucesso!');

      setTimeout(() => {
        navigate(-1);
      }, '3000');
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível fazer pedido.');
      }
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <div className="cart">
          <h2>Carrinho</h2>

          {cartItem.length === 0 && (
            <div className="empty-cart">
              <h3> Ops! Carrinho vazio!</h3>
              <p>Adicione ao menos um item para continuar.</p>
              <img
                src={emptyCart}
                alt="Imagem de moça com carrinho finalizando compra"
              />
            </div>
          )}

          {cartItem.map((item) => (
            <CartItem
              key={String(item.productId)}
              data={item}
              refetch={getCartItem}
            />
          ))}
        </div>

        <div className="form">
          <h2>Entrega</h2>

          <div className="info">
            <label>Insira seu nome</label>
            <Input
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Selecione a data de entrega</label>
            <Input type="date" onChange={(e) => setDate(e.target.value)} />
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

          <Button
            title="Finalizar compra"
            type="primary"
            onClick={handleNewOrder}
          />
        </div>

        <ToastContainer position="top-center" />
      </main>
    </Container>
  );
}
