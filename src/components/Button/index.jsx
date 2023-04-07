import { Container } from './styles';

export function Button({ title, icon: Icon, type, ...rest }) {
  return (
    <Container type={type} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
