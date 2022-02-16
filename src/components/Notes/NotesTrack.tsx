import { motion, Reorder, useMotionValue } from 'framer-motion';
import styled, { DefaultTheme } from 'styled-components';
import NoteItem, { IItem } from './NoteItem';

const Item = styled(NoteItem)`
  margin: 25px 0;
`;

const Track = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default function NotesTrack({ children, setItems, removeItem }: INotesTrackProps) {

  return (
    <Track>
      <Reorder.Group axis={'y'} onReorder={setItems} values={children}>
        {children &&
          children.map(item => (
            <Item key={item.id} removeItem={() => removeItem(item.id)}>
              {item}
            </Item>
          ))}
      </Reorder.Group>
    </Track>
  );
}

interface INotesTrackProps {
  children: IItem[];
  setItems: (items: IItem[]) => void;
  removeItem: (id: string) => void;
}


