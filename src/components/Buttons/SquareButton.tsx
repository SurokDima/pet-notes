import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ComponentProps } from 'react';

const Button = styled(motion.button).attrs({
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
`;

const Div = styled(Button).attrs({as: motion.div})`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function SquareButton({to, ...rest}: ISquareButtonProps) {
  return to ? (<Link to={to} ><Div  {...rest} /></Link>) : <Button {...rest} />;
};

type ISquareButtonProps = {
  to?: string;
} & ComponentProps<typeof Button>