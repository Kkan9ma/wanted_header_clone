import styled from 'styled-components';
import NavAside from './NavAside';
import NavMenu from './NavMenu';
import NavTop from './NavTop';

const NavHeader = styled.div`
  width: 100%;
  position: fixed;
  padding-right: initial;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`
const NavMainBar = styled.div`
  position: relative;
  max-width: 1060px;
  // height: 50px;

  @media (max-width: 767px) {
      height: 110px;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
    height: 50px;
    width: 87.72%
  }
`
const NavMain = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`

function NavBar() {
  return (
    <>
      <NavHeader>
        <NavMainBar>
          <NavMain>
            <NavTop />
            <NavMenu />
            <NavAside />
          </NavMain>
        </NavMainBar>
      </NavHeader>
    </>
  )
}

export default NavBar;
