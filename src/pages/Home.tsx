import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import AddButton from '../components/Buttons/AddButton';
import InfoButton from '../components/Buttons/InfoButton';
import SearchButton from '../components/Buttons/SearchButton';
import Modal from '../components/Modal';
import NoteItem, { IItem } from '../components/Notes/NoteItem';
import NotesTrack from '../components/Notes/NotesTrack';
import { faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const Search = styled(SearchButton)`
  margin-right: 15px;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const Add = styled(AddButton)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 500;
`;

const initialItems: IItem[] = [
  {
    id: nanoid(),
    text: 'My text is real and i wrote itsdfsdfsdfsdfsdfsdfsdfsdf sdfsd fsd',
    color: 'red',
  },
  { id: nanoid(), text: 'My text is real and i wrote it', color: 'green' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
];

export default function Home() {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeItem = (id: string): void => {
    const index = items.findIndex(item => item.id === id);
    if (index === undefined) return;

    const newItems = [...items];
    newItems.splice(index, 1);

    setItems(newItems);
  };

  return (
    <>
      <PageHeader>
        <PageTitle>Notes</PageTitle>

        <div>
          <Search />
          <InfoButton onClick={() => setIsModalOpen(true)} />
        </div>
      </PageHeader>
      <Body>
        <NotesTrack setItems={setItems} removeItem={removeItem}>
          {items}
        </NotesTrack>
      </Body>
      <Add />
      <AnimatePresence>
        {isModalOpen && (
          <Modal closeModal={() => setIsModalOpen(false)}>
            <div style={{ textAlign: 'center' }}>
              <FontAwesomeIcon icon={faCircleInfo} />
              <p style={{marginTop: 20}}>Info page</p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
