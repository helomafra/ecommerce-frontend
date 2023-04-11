import { Container } from './styles';

import { FiTrash2 } from 'react-icons/fi';

import Product from '../../assets/product.svg';
import Plus from '../../assets/plus-circle.svg';
import Minus from '../../assets/minus-circle.svg';
import { Button } from '../Button';

import { api } from '../../services/api';

export function CartItem({ data, refetch }) {
  async function handleDeleteAll() {
    await api.delete(`/cart/removeAll/${data.productId}`);
    await refetch();
  }

  async function handleIncreaseProduct() {
    await api.post(`/cart/${data.productId}`);
    await refetch();
  }

  async function handleDecreaseProduct() {
    await api.delete(`/cart/${data.productId}`);
    await refetch();
  }

  return (
    <Container>
      <div className="info">
        <img src={Product} alt="Imagem de um pacote de embalagem" />

        <h3>{data.name}</h3>

        <Button icon={FiTrash2} type="remove" onClick={handleDeleteAll} />
      </div>

      <div className="quantity">
        <p>
          <span>R$</span>
          {Number(data.price)
            .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
            .replace('R$', '')
            .trim()}
        </p>

        <div className="alter-cart">
          <img src={Minus} onClick={handleDecreaseProduct} />
          <span>{data.amount}</span>
          <img src={Plus} onClick={handleIncreaseProduct} />
        </div>
      </div>
    </Container>
  );
}
