import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Stock } from '../pages/Stock';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/stock" element={<Stock />} />
    </Routes>
  );
}
