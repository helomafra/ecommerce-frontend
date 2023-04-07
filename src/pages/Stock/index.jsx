import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { StockItem } from '../../components/StockItem';
import { Container } from './styles';

import { api } from '../../services/api';

export function Stock() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products`);
      setProduct(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <h1>Estoque</h1>

        {products.map((product) => (
          <StockItem key={product.id} data={product} />
        ))}
      </main>
    </Container>
  );
}
