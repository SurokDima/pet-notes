import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps } from 'react';

import SquareButton from './SquareButton';

export default function InfoButton(props: IInfoButtonProps) {
  return (
    <SquareButton {...props}>
      <FontAwesomeIcon icon={faInfo} />
    </SquareButton>
  );
}

type IInfoButtonProps = {} & ComponentProps<typeof SquareButton>;
