import { nanoid } from 'nanoid';
import { IItem } from '../types/types';

/**
 * Get all items from localStorage
 * 
 * @returns all notes
 */
export function getItems(): IItem[] {
  const items = JSON.parse(localStorage.getItem('items') ?? '[]') as IItem[];
  return items;
}

/**
 * Save items to localStorage
 * 
 * @param items items to save
 */
 export function setItems(items: IItem[]): void {
  localStorage.setItem('items', JSON.stringify(items));
}

/**
 * Returns note by id
 * 
 * @param id item's id
 * @returns item from localStorage by id
 */
export function getItemById(id: IItem['id']): IItem | undefined {
  const item = getItems().find(item => item.id === id);
  return item;
}

/**
 * Saves items to localStorage
 */
export function saveItem(item: IItem): void {
  if(item.text === '') return;

  const items = getItems();
  const itemIndex = items.findIndex(el => el.id === item.id);

  if (itemIndex === -1) {
    items.push(item);  
  } else {
    items[itemIndex] = { ...item };
  }

  setItems(items);
};


/**
 * Deletes item by id
 *  
 * @param id id of item to delete
 */
export function deleteItem(id: IItem['id']): void {
  const items = getItems();
  const itemIndex = items.findIndex(el => el.id === id);
  if(itemIndex === -1) return;

  items.splice(itemIndex, 1);
  setItems(items);
}