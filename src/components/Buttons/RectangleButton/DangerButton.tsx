import styled from 'styled-components';
import RectangleButton from './RectangleButton';

const DangerButton = styled(RectangleButton)`
  background: ${props => props.theme.danger};
`;

export default DangerButton;
