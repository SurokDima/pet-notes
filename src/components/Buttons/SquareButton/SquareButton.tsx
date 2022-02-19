import styled from 'styled-components';
import Button from '../Button';

const SquareButton = styled(Button).attrs({
  whileTap: { scale: 0.9 },
})`
  border: none;
  background: ${props => props.theme.secondary};
  border-radius: 15px;
  color: ${props => props.theme.white};
  font-size: 1.25rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SquareButton;