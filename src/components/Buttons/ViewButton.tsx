import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps } from 'react';

import SquareButton from './SquareButton';

export default function ViewButton(
  props: IViewButtonProps
) {
  return (
    <SquareButton {...props}>
      <FontAwesomeIcon icon={faEye} />
    </SquareButton>
  );
}

type IViewButtonProps = {} & ComponentProps<typeof SquareButton>
