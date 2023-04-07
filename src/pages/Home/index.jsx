import { useState, useEffect } from 'react';
import { Container } from './styles';

import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';

import { api } from '../../services/api';

export function Home() {
  const [cards, setCards] = useState([]);

  async function handleAddToCart(id) {
    await api.post(`/cart/${id}`);
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
      <Header refetch={fetchCards} />

      <main>
        {cards.map((card) => (
          <ProductCard
            key={String(card.id)}
            data={card}
            onClick={() => handleAddToCart(card.id)}
          />
        ))}
      </main>
    </Container>
  );
}
