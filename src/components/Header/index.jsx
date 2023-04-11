import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

import { Button } from '../Button';

import Logo from '../../assets/logo.svg';
import { FiShoppingCart } from 'react-icons/fi';

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

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo Shopper" onClick={handleBackHome} />
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
