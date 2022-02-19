import { useState, SyntheticEvent } from 'react';

/**
 * Hook to control input
 * 
 * @param startValue default value
 * @param callback callback to execute on change
 * @returns input value, func to set value and onChange handler
 */
export default function useInput(
  startValue?: string,
  callback?: (value: string) => string
): [string, (arg: string) => void, (e: SyntheticEvent) => void] {
  const [value, setValue] = useState<string>(startValue ?? '');

  const onChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const newValue = callback ? callback(target.value) : target.value;

    setValue(newValue);
  };

  return [value, setValue, onChange];
}
