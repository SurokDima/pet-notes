import { motion } from 'framer-motion';
import styled from 'styled-components';

const CircleButton = styled(motion.button).attrs({
  whileTap: { scale: 0.9 },
})`
  border: none;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  color: ${props => props.theme.white};
  font-size: 3rem;
  width: 70px;
  height: 70px;
  text-align: center;
  vertical-align: middle;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4), -5px 0 10px 0 rgba(0, 0, 0, 0.4);
`;

export default CircleButton;
