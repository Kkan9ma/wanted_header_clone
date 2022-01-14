import TopBanner from "./TopBanner";
import styled from 'styled-components';

const MainArea = styled.main`
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
  background-color: #fff;
  display: block;
`

function Main() {
  return (
    <>
      <MainArea>
        <TopBanner />
      </MainArea>
    </>
  )
}

export default Main;
