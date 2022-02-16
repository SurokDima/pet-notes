import styled from 'styled-components';
import { motion } from 'framer-motion';

const SquareButton = styled(motion.button).attrs({
  whileTap: {scale: 0.9},
})`
  border: none;
  background: ${props => props.theme.secondary};
  border-radius: 15px;
  color: ${props => props.theme.white};
  font-size: 1.25rem;
  width: 50px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
`

export default SquareButton;