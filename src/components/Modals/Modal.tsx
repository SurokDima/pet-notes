import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Window = styled(motion.div)`
  width: 100%;
  max-width: 330px;
  padding: 30px;
  border-radius: 20px;
  background: ${props => props.theme.primary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${props => props.theme.modalText};
  font-size: 1.4375rem;

  svg {
    color: ${props => props.theme.modalIcons};
    font-size: 1.875rem;
  }
`;

const Stub = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.stub};
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Modal({ children, closeModal }: IModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Container >
      <Stub
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      />
      <Window
        initial={{ opacity: 0, scale: 0.7, y: '-50%', x: '-50%' }}
        animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
        exit={{ opacity: 0, scale: 0.7, y: '-50%', x: '-50%' }}
      >
        {children}
      </Window>
    </Container>
  );
}

interface IModalProps {
  closeModal: () => void;

  children?: ReactNode;
}
