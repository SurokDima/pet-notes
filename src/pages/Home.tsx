import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { nanoid } from 'nanoid';
import { RefObject, SyntheticEvent, useState } from 'react';
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
import SearchField from '../components/SearchField';
import useInput from '../hooks/useInput';

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

const PageDefaultHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const initialItems: IItem[] = [
  {
    id: nanoid(),
    text: 'My text is real and i wrote itsdfsdfsdfsdfsdfsdfsdfsdf sdfsd fsd',
    color: 'red',
  },
  { id: nanoid(), text: '1My text is real and i wrote it', color: 'green' },
  { id: nanoid(), text: '2My text is real and i wrote it' },
  { id: nanoid(), text: '3My text is real and i wrote it' },
  { id: nanoid(), text: '3My text is real and i wrote it' },
  { id: nanoid(), text: '5My text is real and i wrote it' },
  { id: nanoid(), text: '6My text is real and i wrote it' },
];

export default function Home() {
  const [items, setItems] = useState(initialItems);
  const [value, onChange, clearValue] = useValue();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const removeItem = (id: string): void => {
    const index = items.findIndex(item => item.id === id);
    if (index === undefined) return;

    const newItems = [...items];
    newItems.splice(index, 1);

    setItems(newItems);
  };

  const filterItems = () => items.filter(item => item.text.startsWith(value));

  return (
    <>
      <PageHeader>
        <AnimatePresence
          initial={false}

        >
          {isSearchOpen ? (
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '-100%', transition: { duration: 0.2 } }}
            >
              <SearchField
                value={value}
                onChange={onChange}
                clearValue={() => {
                  clearValue();
                  setIsSearchOpen(false);
                }}
                autoFocus={true}
              />
            </motion.div>
          ) : (
            <PageDefaultHeader
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '100%', transition: { duration: 0.2 } }}
            >
              <PageTitle>Notes</PageTitle>
              <div>
                <Search onClick={() => setIsSearchOpen(true)} />
                <InfoButton onClick={() => setIsModalOpen(true)} />
              </div>
            </PageDefaultHeader>
          )}
        </AnimatePresence>
      </PageHeader>
      <Body>
        <NotesTrack setItems={setItems} removeItem={removeItem}>
          {filterItems()}
        </NotesTrack>
      </Body>
      <Add />
      <AnimatePresence>
        {isModalOpen && (
          <Modal closeModal={() => setIsModalOpen(false)}>
            <div style={{ textAlign: 'center' }}>
              <FontAwesomeIcon icon={faCircleInfo} />
              <p style={{ marginTop: 20 }}>Info page</p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

function useValue(): [string, (e: SyntheticEvent) => void, () => void] {
  const [value, setValue, onChange] = useInput();

  const clearValue = () => setValue('');

  return [value, onChange, clearValue];
}
