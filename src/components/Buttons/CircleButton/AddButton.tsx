import { ComponentProps } from 'react';
import CircleButton from './CircleButton';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AddButton(props: IAddButtonPros) {
  return (
    <CircleButton {...props}>
      <FontAwesomeIcon icon={faPlus} />
    </CircleButton>
  );
}

type IAddButtonPros = {} & ComponentProps<typeof CircleButton>;
