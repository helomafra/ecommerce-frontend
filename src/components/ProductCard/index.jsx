import { Container } from './styles';

import Product from '../../assets/product.svg';
import { Button } from '../Button';

export function ProductCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <img src={Product} alt="Imagem de um pacote de embalagem" />

      <div className="info">
        <p>
          <span>R$</span>
          {data.price
            .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
            .replace('R$', '')
            .trim()}
        </p>

        <h3>{data.name}</h3>

        <Button title="+ Adicionar" type="secondary" />
      </div>
    </Container>
  );
}
