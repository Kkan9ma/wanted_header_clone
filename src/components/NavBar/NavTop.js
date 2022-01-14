import styled from 'styled-components';
import iconMenuImage from './icon-menu.png';
import mainLogoImage from './main-logo.png';

const NavTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (max-width: 767px) {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px 0;
    height: 60px;
    width: 100%;
  }  
`

const NavTopLogoContainer = styled.div`
  display: flex;
`

const NavTopLogoButton = styled.button`
  padding: 0;
  border: 0;
  margin:0;
  margin-top: -2px;
  margin-right: 15px;
  background: none;
`

const NavTopIconMenuImage = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
  cursor: pointer;
`

const NavTopMainLogo = styled.a`
  display: block;
  text-decoration: inherit;
  cursor: pointer;
`

const NavTopMainLogoImage = styled.img`
  width: 75px;
  height: 17px;
`

function NavTop() {
  return (
    <>
      <NavTopContainer>
        <NavTopLogoContainer>
          <NavTopLogoButton>
            <NavTopIconMenuImage src={iconMenuImage} />
          </NavTopLogoButton>
          <NavTopMainLogo>
            <NavTopMainLogoImage src={mainLogoImage} />
          </NavTopMainLogo>
        </NavTopLogoContainer>
      </NavTopContainer>
    </>
  )
}

export default NavTop;
