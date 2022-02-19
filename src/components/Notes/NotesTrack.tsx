import {
  AnimatePresence,
  motion,
  Reorder,
} from 'framer-motion';
import styled from 'styled-components';
import { IItem } from '../../types/types';
import NoteItem from './NoteItem';

const Item = styled(NoteItem)`
  margin: 25px 0;
`;

const Track = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default function NotesTrack({
  children,
  setItems,
  removeItem,
  isSearchMode
}: INotesTrackProps) {
  return (
    <Track>
      <Reorder.Group axis={'y'} onReorder={setItems} values={children}>
        <AnimatePresence initial={false}>
          {children &&
            children.map(item => (
              <Item key={item.id} isSearchMode={isSearchMode} removeItem={() => removeItem(item.id)}>
                {item}
              </Item>
            ))}
        </AnimatePresence>
      </Reorder.Group>
    </Track>
  );
}

interface INotesTrackProps {
  children: IItem[];
  isSearchMode: boolean;
  setItems: (items: IItem[]) => void;
  removeItem: (id: string) => void;
}
