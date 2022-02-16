import { motion, useMotionValue } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import styled from 'styled-components';
import InfoButton from '../components/Buttons/InfoButton';
import SearchButton from '../components/Buttons/SearchButton';
import NoteItem, { IItem } from '../components/Notes/NoteItem';
import NotesTrack from '../components/Notes/NotesTrack';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const Search = styled(SearchButton)`
  margin-right: 15px;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const initialItems: IItem[] = [
  { id: nanoid(), text: 'My text is real and i wrote itsdfsdfsdfsdfsdfsdfsdfsdf sdfsd fsd', color: 'red' },
  { id: nanoid(), text: 'My text is real and i wrote it', color: 'green' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },
  { id: nanoid(), text: 'My text is real and i wrote it' },

];

export default function Home() {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id: string): void => {
    const index = items.findIndex(item => item.id === id);
    if(index === undefined) return;

    const newItems = [...items];
    newItems.splice(index, 1);

    setItems(newItems);
  }

  return (
    <>
      <PageHeader>
        <PageTitle>Notes</PageTitle>

        <div>
          <Search />
          <InfoButton />
        </div>
      </PageHeader>
      <Body>
        <NotesTrack setItems={setItems} removeItem={removeItem}>{items}</NotesTrack>
      </Body>
    </>
  );
}
