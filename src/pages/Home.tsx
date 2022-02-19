import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import SearchField from '../components/SearchField';
import useInput from '../hooks/useInput';
import {
  deleteItem,
  getItems,
  setItems as setItemsToStorage,
} from '../helpers/items';
import { IItem } from '../types/types';
import AddButton from '../components/Buttons/CircleButton/AddButton';
import InfoButton from '../components/Buttons/SquareButton/InfoButton';
import SearchButton from '../components/Buttons/SquareButton/SearchButton';
import Modal from '../components/Modals/Modal';
import NotesTrack from '../components/Notes/NotesTrack';

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

export default function Home() {
  const [value, onChange, clearValue] = useValue();
  const [setItems, removeItem, filterItems] = useItems(value);

  const onReorder = (items: IItem[]) => {
    if (value !== '') return;
    setItems(items);
    setItemsToStorage(items);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <PageHeader>
        <AnimatePresence initial={false}>
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
        <NotesTrack
          setItems={onReorder}
          isSearchMode={isSearchOpen}
          removeItem={removeItem}
        >
          {filterItems()}
        </NotesTrack>
      </Body>
      <Add type={'link'} to={`/note/${nanoid()}`} />
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

function useItems(
  value: string
): [(arg: IItem[]) => void, (id: IItem['id']) => void, () => IItem[]] {
  const [items, setItems] = useState(getItems());

  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.storageArea === localStorage) {
        setItems(getItems());
      }
    };

    window.addEventListener('storage', listener);

    return () => window.removeEventListener('storage', listener);
  }, []);

  const removeItem = (id: IItem['id']): void => {
    const index = items.findIndex(item => item.id === id);
    if (index === undefined) return;

    const newItems = [...items];
    newItems.splice(index, 1);

    setItems(newItems);
    deleteItem(id);
  };
  const filterItems = () =>
    items
      .filter(item => item.text.startsWith(value))
      .map(item => {
        if (item.text.length < 50) return item;
        return { ...item, text: item.text.slice(0, 50) + '...' };
      });

  return [setItems, removeItem, filterItems];
}
