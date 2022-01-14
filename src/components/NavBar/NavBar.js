import styled from 'styled-components';
import Aside from './Aside';
import Menu from './Menu';
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
  height: 50px;

  @media screen and (max-width: 1200px) {
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
            <Menu />
            <Aside />
          </NavMain>
        </NavMainBar>
      </NavHeader>
    </>
  )
}

export default NavBar;
