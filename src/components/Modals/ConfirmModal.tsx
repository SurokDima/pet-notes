import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';
import styled from 'styled-components';
import DangerButton from '../Buttons/RectangleButton/DangerButton';
import Modal from './Modal';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import SuccessButton from '../Buttons/RectangleButton/SuccessButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const Question = styled.p`
  margin-top: 20px;
  text-align: center;
`

export function ConfirmModal({
  yesText,
  yesAction,
  noText,
  noAction,
  question,
  ...props
}: IConfirmModalProps) {
  return (
    <Modal {...props}>
      <Container>
        <FontAwesomeIcon icon={faCircleInfo} />
        <Question>{question}</Question>
        <ButtonsContainer>
          <DangerButton onClick={noAction}>{noText}</DangerButton>
          <SuccessButton onClick={yesAction}>{yesText}</SuccessButton>
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}

type IConfirmModalProps = {
  yesText: string;
  yesAction: () => void;

  noText: string;
  noAction: () => void;

  question: string;
} & ComponentProps<typeof Modal>;
