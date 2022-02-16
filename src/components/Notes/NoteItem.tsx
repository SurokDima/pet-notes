import {
  DragControls,
  motion,
  PanInfo,
  Reorder,
  useAnimation,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import React, { ComponentProps, useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IEvent } from '../../types/types';

const NoteContainer = styled(motion.div)<INoteContainerProps>`
  background: ${props => props.theme.notesColors[props.color || 'yellow']};
  border-radius: 10px;
  padding: 28px 15px 28px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.primary};
  font-size: 25px;
  user-select: none;
`;

const NoteTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: 400;
  color: ${props => props.theme.primary};
  font-family: 'Nunito', sans-serif;
  margin-right: 20px;
  overflow: hidden;
  height: 20px;
`;

export default function NoteItem({
  children,
  removeItem,
  className,
}: INoteItemProps) {
  const dragControls = useDragControls();

  const controls = useAnimation();

  const handleDrag = async (event: IEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -250) {
      await controls.start({ x: '-100%', transition: { duration: 0.2 } });
      removeItem();
    } else {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 600, damping: 30 },
      });
    }
  };

  return (
    <Reorder.Item
      dragListener={false}
      dragControls={dragControls}
      dragDirectionLock
      value={children}
      id={children.id}
      whileTap={{ scale: 1.03 }}
      style={{
        listStyleType: 'none',
        overflow: 'hidden',
        borderRadius: 10,
      }}
      className={className}
      layout
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
    >
      <NoteContainer
        drag={'x'}
        dragListener={false}
        dragDirectionLock
        dragControls={dragControls}
        animate={controls}
        onDragEnd={handleDrag}
        color={children.color}
      >
        <NoteTitle>{children.text}</NoteTitle>
        <motion.div
          style={{ touchAction: 'none' }}
          onPointerDown={e => dragControls.start(e)}
        >
          <FontAwesomeIcon icon={faGrip} />
        </motion.div>
      </NoteContainer>
    </Reorder.Item>
  );
}

interface INoteContainerProps {
  color?: keyof DefaultTheme['notesColors'];
}

interface INoteItemProps {
  children: IItem;
  removeItem: () => void;
  className?: string;
}

export interface IItem {
  id: string;
  color?: keyof DefaultTheme['notesColors'];
  text: string;
}
