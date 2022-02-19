import { DefaultTheme } from 'styled-components';

export type IEvent = MouseEvent | PointerEvent | TouchEvent;

export interface IItem {
  id: string;
  color?: keyof DefaultTheme['notesColors'];
  text: string;
}