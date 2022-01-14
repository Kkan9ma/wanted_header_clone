import styled from 'styled-components';
import image from '../../profile_default.png';

const Aside = styled.aside`
  padding: 10px 0;
  height: 100%;
  display: block;
`

const ItemList = styled.ul`
  height: 100%;
  margin: 0;

  li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  li>* {
      padding: 0 10px;
      // height: 100%;
      font-size: 14px;
      color: #333;
      font-weight: 600;
      line-height: 1;
    }
  

  @media screen and (max-width: 767px) {
    margin-top: -5px;
  }

  @media screen and (min-width: 1200px) {
    li>* {
      padding: 0 10px;
    }
  }
`

const SearchButton = styled.button`
  position: relative;
  margin-top: 5px;
  
  @media (max-width: 767px) {
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0;
  }
`

const NotiButton = styled.button`
  position: relative;
  margin-right: 10px;
  margin-top: 5px;

  @media (max-width: 767px) {
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    margin-right: 5px;
  }

  @media (min-width: 1200px) {
    padding: 0 10px;
  }
`

const NotiBadge = styled.span`
  background-color: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
  top: -4px;
  left: 24px;
  position: absolute;
  padding: 0!important;
  display: inline-flex;
  background: #36f;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

const ProfileBox = styled.li`
  display: inline-flex!important;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;

  @media (max-width: 767px) {
    display:none!important;
    margin-right: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: none!important;
    margin-right: 0;
  }
`

const ProfileButton = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0!important;
  margin-right: 11px!important;

  @media (max-width: 767px) {
    margin-right: 0;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-right: 0;
  }
  
`

const AvatarBorder = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const AvatarImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`

const AvatarBadge = styled.span`
  background-color: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
  position: absolute;
  top: -2px;
  left: 22px;
  padding: 0!important;
  display: inline-flex;
  background: #36f;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

const EmployeeBox = styled.li`
  display: inline-flex!important;


  @media (max-width: 991px) {
    display:none!important;
  }

  &:before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`

const DashboardButton = styled.a`
  font-size: 13px!important;
  color: #666!important;
  line-height: 30px!important;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px!important;
  margin-left: 15px;
  font-weight: 400!important;
  vertical-align: bottom;
  align-items: center;
  display: flex;

  @media (max-width: 767px) {
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0;
  }
`

const AsideMenu = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  @media (min-width: 992px){
    display: none!important;
  }
`

const AsideMenuButton = styled.button`
  margin-right: 10px;
  padding-left: 10px;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-right: 0;
  }

  @media (min-width: 1200px){
    padding: 0 10px;
  }
`

function NavAside() {
  return (
    <>
      <Aside>
        <ItemList>
          <li>
            <SearchButton>
              <svg xmlns="https://www.w3.org/2000/svg"
                xmlnsXlink="https://www.w3.org/1999/xlink"
                width="18" height="18" viewBox="0 0 18 18">
                <defs>
                  <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z">
                  </path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a">
                  </use>
                </g>
              </svg>
            </SearchButton>
          </li>
          <li>
            <NotiButton>
              <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                <defs>
                  <path id="bpnpn3yn0a" d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z">
                  </path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                    <mask id="1dencd96ob" fill="#fff">
                      <use xlinkHref="#bpnpn3yn0a">
                      </use>
                    </mask>
                    <use fillRule="nonzero" stroke="currentColor" strokeWidth=".3" xlinkHref="#bpnpn3yn0a">
                    </use>
                    <g fill="currentColor" mask="url(#1dencd96ob)">
                      <path d="M0 0H18V18H0z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </NotiButton>
            <NotiBadge>
              <svg width="5" height="5" viewBox="0 0 6 6">
                <g fill="#fff" fillRule="nonzero">
                  <path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)">
                  </path>
                </g>
              </svg>
            </NotiBadge>
          </li>
          <ProfileBox>
            <ProfileButton>
              <AvatarBorder>
                <AvatarImage src={image}></AvatarImage>
              </AvatarBorder>
            </ProfileButton>
            <AvatarBadge>
              <svg className="" width="5" height="5" viewBox="0 0 6 6"><g fill="#fff" fillRule="nonzero"><path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)"></path></g></svg>
            </AvatarBadge>
          </ProfileBox>
          <EmployeeBox>
            <DashboardButton>
              기업 서비스
            </DashboardButton>
          </EmployeeBox>
          <AsideMenu>
            <AsideMenuButton>
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z" id="a">
                  </path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="b" fill="#fff">
                    <use xlinkHref="#a">
                    </use>
                  </mask>
                  <use fill="#333" xlinkHref="#a">
                  </use>
                  <g mask="url(#b)" fill="#333">
                    <path d="M0 0h18v18H0z">
                    </path>
                  </g>
                </g>
              </svg>
            </AsideMenuButton>
          </AsideMenu>
        </ItemList>
      </Aside>
    </>

  )
}

export default NavAside;
