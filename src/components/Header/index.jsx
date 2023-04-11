import { Container } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';

import Logo from '../../assets/logo.svg';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import { api } from '../../services/api';

export function Header() {
  const navigate = useNavigate();
  function handleCartButton() {
    navigate('/cart');
  }

  function handleBackHome() {
    navigate('/');
  }

  function handleSeeStock() {
    navigate('/stock');
  }

  // async function fetchSearchProducts(e) {
  //   const search = await api.get(`/products/search?title=${e}`);
  // }

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo Shopper" onClick={handleBackHome} />
        {/* 
        <Input
          placeholder="Pesquisar produto"
          icon={FiSearch}
          onChange={(e) => fetchSearchProducts(e.target.value)}
        /> */}
      </div>

      <div className="buttons">
        <Button title="Ver estoque" type="secondary" onClick={handleSeeStock} />
        <Button
          title="Ver carrinho"
          type="primary"
          icon={FiShoppingCart}
          onClick={handleCartButton}
        />
      </div>
    </Container>
  );
}
