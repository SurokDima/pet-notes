import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import styled from 'styled-components';

const Cancel = styled(FontAwesomeIcon).attrs({ icon: faXmark })`
  font-size: 1.25rem;
  color: ${props => props.theme.white};
`;

export default function CancelIcon(props: ICancelIconProps) {
  return (
    <motion.div whileTap={{ scale: 0.9 }} {...props}>
      <Cancel />
    </motion.div>
  );
}

interface ICancelIconProps extends ComponentProps<typeof motion.div> {}
