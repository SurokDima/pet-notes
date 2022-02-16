import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { dark } from './themes/themes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

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
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Background>
        <Container>
          <Layout>
            <Routes>
              <Route path={'/'} element={<Home />} />
            </Routes>
          </Layout>
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default App;
