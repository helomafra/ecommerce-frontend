import { useState, useEffect } from 'react';
import { Container } from './styles';

import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { api } from '../../services/api';

export function Home() {
  const [cards, setCards] = useState([]);

  async function handleAddToCart(id, name) {
    await api.post(`/cart/${id}`);
    toast.success(`Item adicionado ao carrinho! ${name}`);
  }

  async function fetchCards() {
    const response = await api.get(`/products`);

    setCards(response.data);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        {cards.map((card) => (
          <ProductCard
            key={String(card.id)}
            data={card}
            onClick={() => handleAddToCart(card.id, card.name)}
          />
        ))}
      </main>

      <ToastContainer autoClose={2000} position="bottom-right" />
    </Container>
  );
}
