import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { dark } from './themes/themes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';

const Background = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background: ${props => props.theme.primary};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  margin: 0 auto;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;

const Global = createGlobalStyle`
  html {
    background: ${props => props.theme.primary}
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.secondary};
  }
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Background>
        <Container>
          <Layout>
            <Routes>
              <Route path={'/note/:id'} element={<Note />} />
              <Route path={'/'} element={<Home />} />
            </Routes>
          </Layout>
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default App;
