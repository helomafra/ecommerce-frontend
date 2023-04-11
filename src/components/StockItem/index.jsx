import { Container } from './styles';

import Product from '../../assets/product.svg';

export function StockItem({ data }) {
  return (
    <Container>
      <img src={Product} alt="" />
      <div className="content">
        <h3>{data.name}</h3>
        <p>{data.stock} em estoque</p>
      </div>
    </Container>
  );
}
