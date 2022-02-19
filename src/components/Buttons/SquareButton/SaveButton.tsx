import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps } from 'react';

import SquareButton from './SquareButton';

export default function SaveButton(props: ISaveButtonProps) {
  return (
    <SquareButton {...props}>
      <FontAwesomeIcon icon={faFloppyDisk} />
    </SquareButton>
  );
}

type ISaveButtonProps = {} & ComponentProps<typeof SquareButton>;
