import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps } from 'react';

import SquareButton from './SquareButton';

export default function BackButton(props: IBackButtonProps) {
  return (
    <SquareButton {...props}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </SquareButton>
  );
}

type IBackButtonProps = {} & ComponentProps<typeof SquareButton>;
