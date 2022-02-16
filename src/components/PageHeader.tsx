import styled from 'styled-components';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.primary};
  padding: 50px 0 25px 0;
  width: 100%;
`

export default PageHeader;