import styled from 'styled-components';
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import ResetGlobalStyle from "./GlobalStyle";

const PaddingDivision = styled.div`
  height: 50px;
`

function App() {
  return (
    <>
      <ResetGlobalStyle />
      <NavBar />
      <PaddingDivision />
      <Main />
    </>
  );
}

export default App;
