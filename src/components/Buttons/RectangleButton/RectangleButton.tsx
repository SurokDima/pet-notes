import styled from 'styled-components';
import Button from '../Button';

const RectangleButton = styled(Button).attrs({
  whileTap: { scale: 0.9 },
})`
  border: none;
  box-shadow: none;
  outline: none;
  border-radius: 5px;

  width: 112px;
  height: 40px;

  font-family: 'Nunito', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;

  color: ${props => props.theme.white};
`;

export default RectangleButton;
