import styled, { css } from 'styled-components';
import CancelIcon from './CancelIcon';
import { SyntheticEvent, useEffect, useRef } from 'react';

const Container = styled.div`
  position: relative;
`;

const textStyles = css`
  font-family: 'Nunito', sans-serif;
  font-size: 1.25rem;
  color: ${props => props.theme.inputText};
`;

const Field = styled.input.attrs({ type: 'text' })`
  border: none;
  outline: none;

  background: ${props => props.theme.secondary};
  border-radius: 30px;
  ${textStyles};

  height: 50px;
  padding: 0 60px 0 40px;

  &::placeholder {
    ${textStyles};
  }
`;

const CancelContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
`;

export default function SearchField({
  onChange,
  value,
  clearValue,
  autoFocus,
}: ISearchFieldProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {autoFocus && ref.current?.focus()}, []);

  return (
    <Container>
      <Field
        ref={ref}
        placeholder="Search by the keyword..."
        value={value}
        onChange={onChange}
      />
      <CancelContainer>
        <CancelIcon onClick={clearValue} />
      </CancelContainer>
    </Container>
  );
}

interface ISearchFieldProps {
  value: string;
  onChange: (event: SyntheticEvent) => void;
  clearValue: () => void;
  autoFocus?: boolean;
}
