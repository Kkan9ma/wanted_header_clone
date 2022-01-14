import styled from 'styled-components';

const MenuList = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 767px) {
    text-align: left;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    margin-right: 30px;
  }

  @media screen and (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
`

const HomeMenu = styled.li`
  height: inherit;
  display: inline-block;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }

  &:after {
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;

  }
`

const HomeMenuLabel = styled.a`
  padding-left: 20px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 11px 10px 19px;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    padding: 11px 10px 19px;
    font-size: 13px;
  }

  @media screen and (min-width: 992px) and (max-width: 1100px) {
    font-size: 13px;
    padding: 15px 0;
  }
`

const Menu = styled.li`
  height: inherit;
  display: inline-block;

  &:after {
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
  }
`;

const HiddenMenu = styled(Menu)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const MenuLabel = styled.a`
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding: 11px 10px 19px;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    padding: 11px 10px 19px;
    font-size: 13px;
  }

  @media screen and (min-width: 992px) and (max-width: 1100px) {
    font-size: 13px;
    padding: 15px 0;
  }
`;

const MenuBadge = styled.em`
  position: absolute;
  top: 10px;
  right: -5px;
  pointer-events: none;
  font-style: normal;
`



function NavMenu() {
  return (
    <>
      <MenuList>
        <HomeMenu>
          <HomeMenuLabel>
            홈
          </HomeMenuLabel>
        </HomeMenu>
        <Menu>
          <MenuLabel>
            채용
          </MenuLabel>
        </Menu>
        <Menu>
          <MenuLabel>
            이벤트
          </MenuLabel>
        </Menu>
        <HiddenMenu>
          <MenuLabel>
            직군별 연봉
          </MenuLabel>
        </HiddenMenu>
        <HiddenMenu>
          <MenuLabel>
            이력서
          </MenuLabel>
        </HiddenMenu>

        <HiddenMenu>
          <MenuLabel>
            커뮤니티
            <MenuBadge>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                <g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500">
                  <g fill="#36F">
                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                      <tspan x="0" y="8">
                        New
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </MenuBadge>
          </MenuLabel>
        </HiddenMenu>

        <HiddenMenu>
          <MenuLabel>
            프리랜서
          </MenuLabel>
        </HiddenMenu>

        <HiddenMenu>
          <MenuLabel>
            AI 합격예측
            <MenuBadge>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                <g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500">
                  <g fill="#36F">
                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                      <tspan x="0" y="8">
                        Beta
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </MenuBadge>
          </MenuLabel>
        </HiddenMenu>
      </MenuList>
    </>
  )
}

export default NavMenu;
