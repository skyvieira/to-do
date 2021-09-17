import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles'

import Header from './components/Header'
import Main from './components/Main'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.main`
  padding: 3rem;
  width: 50%;
  height: 70%;
  border: 30px solid #333;
  background: #eee;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      
      <Container>
        <Wrapper>
          <Header/>
          <Main/>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
