import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import BackButton from '../components/Buttons/SquareButton/BackButton';
import SaveButton from '../components/Buttons/SquareButton/SaveButton';
import ViewButton from '../components/Buttons/SquareButton/ViewButton';
import { ConfirmModal } from '../components/Modals/ConfirmModal';
import Modal from '../components/Modals/Modal';
import PageHeader from '../components/PageHeader';
import { getItemById, getItems, saveItem } from '../helpers/items';
import useInput from '../hooks/useInput';

const fontStyles = css`
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 20px;
`;

const Body = styled.textarea`
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
  resize: none;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  ${fontStyles};
  color: ${props => props.theme.white};

  &::placeholder {
    color: ${props => props.theme.placeholder};
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.secondary};
  }
`;

const maxSize = 500;
export default function Note() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  if (!params.id) throw new Error('Id has not provided');

  const item = getItemById(params.id) ?? {
    id: params.id,
    color: 'yellow',
    text: '',
  };
  const [itemState] = useState(item);

  const [value, , onChange] = useInput(itemState.text ?? '', value =>
    value.slice(0, maxSize)
  );
  const [isChanged, setIsChanged] = useState(false);

  const [saveChangesOpen, setSaveChangesOpen] = useState(false);
  const [discardChangesOpen, setDiscardChangesOpen] = useState(false);

  const save = () => {
    setIsChanged(false);
    saveItem({ ...itemState, text: value });
  };

  const saveAndGoHome = () => {
    save();
    navigate('/');
  };

  const onBackClick = (e: PointerEvent) => {
    if (isChanged) {
      setSaveChangesOpen(true);
      e.preventDefault();
    }
  };

  return (
    <Container>
      <div>
        <PageHeader>
          <BackButton type={'link'} onClick={onBackClick} to={'/'} />
          <div>
            <SaveButton onClick={save} />
          </div>
        </PageHeader>
      </div>
      <Body
        placeholder={'Type something...'}
        value={value}
        onChange={e => {
          setIsChanged(true);
          onChange(e);
        }}
      />
      {saveChangesOpen && (
        <ConfirmModal
          question={'Save Changes?'}
          closeModal={() => {}}
          yesText={'Save'}
          yesAction={saveAndGoHome}
          noText={'Discard'}
          noAction={() => {
            setDiscardChangesOpen(true);
            setSaveChangesOpen(false);
          }}
        />
      )}
      {discardChangesOpen && (
        <ConfirmModal
          question={'Are your sure you want discard your changes ?'}
          closeModal={() => {}}
          yesText={'Keep'}
          yesAction={saveAndGoHome}
          noText={'Discard'}
          noAction={() => navigate('/')}
        />
      )}
    </Container>
  );
}
