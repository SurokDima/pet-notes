import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ComponentProps } from 'react';

import SquareButton from './SquareButton';

export default function SearchButton(props: ISearchButtonProps) {
  return (
    <SquareButton {...props}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </SquareButton>
  );
}

type ISearchButtonProps = {} & ComponentProps<typeof SquareButton>;
