import { useState, SyntheticEvent } from 'react';

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
