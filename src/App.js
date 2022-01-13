import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import ResetGlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <ResetGlobalStyle />
      <NavBar />
      <Main />
    </>
  );
}

export default App;
