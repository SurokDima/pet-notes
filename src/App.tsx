import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { dark } from './themes/themes';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: ${(props) => props.theme.primary};
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home /> } />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
