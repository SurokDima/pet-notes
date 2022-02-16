import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps } from 'react';

import SquareButton from './SquareButton';

export default function EditButton(props: IEditButtonProps) {
  return (
    <SquareButton {...props}>
      <FontAwesomeIcon icon={faPen} />
    </SquareButton>
  );
}

type IEditButtonProps = {} & ComponentProps<typeof SquareButton>