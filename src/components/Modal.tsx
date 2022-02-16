import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const Window = styled.div`
  width: 100%;
  max-width: 330px;
  padding: 30px;
  border-radius: 20px;
  background: ${props => props.theme.primary};
`;

const Contrainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.stub};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Modal({ children }: IModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Contrainer>
      <Window>{children}</Window>
    </Contrainer>
  );
}

interface IModalProps {
  children?: ReactNode;
}
