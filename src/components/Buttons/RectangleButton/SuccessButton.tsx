import styled from 'styled-components';

import RectangleButton from './RectangleButton';

const SuccessButton = styled(RectangleButton)`
  background: ${props => props.theme.success};
`;

export default SuccessButton;
