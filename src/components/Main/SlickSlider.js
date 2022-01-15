import styled from 'styled-components';

const SlickSlideContainer = styled.div`
  margin-bottom: 0;
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
`;

const SlickList = styled.div`
  padding: 0px 50px;
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0px;
`;

const SlickTrack = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  display: block;
`;

const SlickSlide = styled.div`
  position: relative;
  display: block;
  float: left;
  height: 100%;
  min-height: 1px;
  outline: none;

  @media (max-width: 1199px) {
    width: calc(100vw - 80px);
  }

  @media (min-width: 1200px) {
    width: 1060px;
    padding: 0 12px;
    box-sizing: content-box;
  }
`;

const MarginDivision = styled.div`
  margin: 20px 10px;

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const SlideImageBanner = styled.div`
  width: 100%;
  display: inline-block; 
`;

const SlideImageContainer = styled.div`
  // filter: brightness(50%); // active면 100%

  @media (max-width: 767px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`;

// //TODO: 다른 width에 따른 다른 사이즈 이미지 파일 
const SlideImageAnchor = styled.a`

  filter: brightness(100%);
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const SlideImage = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`

// TODO: 애니메이션
const SlideImageInfoContainer = styled.div`
  animation: none;
  text-align: center;

  @media (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    opacity: 0;
    text-align: left;
    left: 34px;
    // animation: Information_in__LsISw .4s ease-in-out;
    // animation-duration: 0.4s;
    // animation-timing-function: ease-in-out;
    // animation-delay: 0s;
    // animation-iteration-count: 1;
    // animation-direction: normal;
    // animation-fill-mode: none;
    // animation-play-state: running;

    // @keyframes Information_in__LsISw {
    
    // }
    opacity: 1;
  }
`

const ImageInfoCardTitle = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  width: "auto";
  text-overflow: ellipsis; 
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`;

const ImageInfoCardSubTitle = styled.h3`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 1200px) {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
`;

const ImageInfoDivider = styled.hr`
  box-sizing: content-box;
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const ImageButtonAnchor = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  height: 40px;
  padding: 6px 8px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;

  @media (min-width: 1200px) {
    margin: 6px 0 0 13px;
  }
`;

const ImageButtonLabel = styled.span`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  color: inherit;
`;

const ImageButtonEndIcon = styled.span`
  margin-top: -2px;
  margin-right: -1px;
  margin-left: 2px;
`;

const ImageButtonSvgIconContainer = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

const ImageButtonSvgIcon = styled.svg`
  overflow: hidden;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  font-size: inherit;

  viewBox: 0 0 18 18;
`

function SlickSlider() {
  return (
    <>
      <SlickSlideContainer>
        <SlickList>
          <SlickTrack>  {/* todo: animation */}
            <SlickSlide>
              <MarginDivision>
                <SlideImageBanner>
                  <SlideImageContainer>
                    <SlideImageAnchor>
                      <SlideImage src={'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg'} />
                    </SlideImageAnchor>
                  </SlideImageContainer>
                  <SlideImageInfoContainer>
                    <ImageInfoCardTitle>
                      개발자 되고싶은 분들!?
                    </ImageInfoCardTitle>
                    <ImageInfoCardSubTitle>
                      프론트엔드 무료 교육과정 참여하기
                    </ImageInfoCardSubTitle>
                    <ImageInfoDivider />
                    <ImageButtonAnchor>
                      <ImageButtonLabel>
                        바로가기
                        <ImageButtonEndIcon>
                          <ImageButtonSvgIconContainer>
                            <ImageButtonSvgIcon>
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </ImageButtonSvgIcon>
                          </ImageButtonSvgIconContainer>
                        </ImageButtonEndIcon>
                      </ImageButtonLabel>
                    </ImageButtonAnchor>
                  </SlideImageInfoContainer>
                </SlideImageBanner>
              </MarginDivision>
            </SlickSlide>
            {/* <div
              data-index={-8}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/livetalk28"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성장하는 개발자가 되려면?"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/livetalk28" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                        alt="성장하는 개발자가 되려면?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>성장하는 개발자가 되려면?</h2>
                    <h3>OOO 검색하지 말 것!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/livetalk28"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-7}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/21_12_s08_b01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="UX 디자이너의 커리어 설계"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/21_12_s08_b01" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg"
                        alt="UX 디자이너의 커리어 설계"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>UX 디자이너의 커리어 설계</h2>
                    <h3>브랜드 가치를 더하는 디자인</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/21_12_s08_b01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-6}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/portfolio_contents_29cm"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="포트폴리오를 부탁해!"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/portfolio_contents_29cm" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                        alt="포트폴리오를 부탁해!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>포트폴리오를 부탁해!</h2>
                    <h3>디자이너의 포폴 살펴보기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/portfolio_contents_29cm"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-5}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="https://youtu.be/VLiACiB2lXw"
                  data-link-kind="CUSTOM_URL"
                  data-content-title="해, 커리어 EP 02 공개"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a
                      href="https://youtu.be/VLiACiB2lXw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                        alt="해, 커리어 EP 02 공개"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>해, 커리어 EP 02 공개</h2>
                    <h3>마지막 관문 2라운드의 승자는?</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/VLiACiB2lXw"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-4}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/hrclass220106" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-3}
              tabIndex={-1}
              className="slick-slide slick-center slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_7"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="마케팅 주니어를 찾습니다"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp Image_Image__active___6EY5">
                    <a href="/events/pre_onboarding_course_7" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                        alt="마케팅 주니어를 찾습니다"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>마케팅 주니어를 찾습니다</h2>
                    <h3>1월 17일(월) 설명회 신청하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_7"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-2}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/velog01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 성장 비결 공개!"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/velog01" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                        alt="개발자 성장 비결 공개!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 성장 비결 공개!</h2>
                    <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/velog01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={-1}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/wantedcon24"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성과를 내는 마케팅"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/wantedcon24" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                        alt="성과를 내는 마케팅"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/wantedcon24"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={0}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_6"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 되고싶은 분들!?"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/pre_onboarding_course_6" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                        alt="개발자 되고싶은 분들!?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 되고싶은 분들!?</h2>
                    <h3>프론트엔드 무료 교육과정 참여하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_6"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={1}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/livetalk28"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성장하는 개발자가 되려면?"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/livetalk28" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                        alt="성장하는 개발자가 되려면?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>성장하는 개발자가 되려면?</h2>
                    <h3>OOO 검색하지 말 것!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/livetalk28"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={2}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/21_12_s08_b01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="UX 디자이너의 커리어 설계"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/21_12_s08_b01" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg"
                        alt="UX 디자이너의 커리어 설계"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>UX 디자이너의 커리어 설계</h2>
                    <h3>브랜드 가치를 더하는 디자인</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/21_12_s08_b01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={3}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/portfolio_contents_29cm"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="포트폴리오를 부탁해!"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/portfolio_contents_29cm" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                        alt="포트폴리오를 부탁해!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>포트폴리오를 부탁해!</h2>
                    <h3>디자이너의 포폴 살펴보기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/portfolio_contents_29cm"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={4}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="https://youtu.be/VLiACiB2lXw"
                  data-link-kind="CUSTOM_URL"
                  data-content-title="해, 커리어 EP 02 공개"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a
                      href="https://youtu.be/VLiACiB2lXw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                        alt="해, 커리어 EP 02 공개"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>해, 커리어 EP 02 공개</h2>
                    <h3>마지막 관문 2라운드의 승자는?</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/VLiACiB2lXw"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={5}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/hrclass220106" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={6}
              className="slick-slide slick-active slick-center slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_7"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="마케팅 주니어를 찾습니다"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp Image_Image__active___6EY5">
                    <a href="/events/pre_onboarding_course_7" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                        alt="마케팅 주니어를 찾습니다"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>마케팅 주니어를 찾습니다</h2>
                    <h3>1월 17일(월) 설명회 신청하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_7"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={7}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/velog01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 성장 비결 공개!"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/velog01" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                        alt="개발자 성장 비결 공개!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 성장 비결 공개!</h2>
                    <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/velog01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={8}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none", width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/wantedcon24"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성과를 내는 마케팅"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/wantedcon24" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                        alt="성과를 내는 마케팅"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/wantedcon24"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={9}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_6"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 되고싶은 분들!?"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/pre_onboarding_course_6" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                        alt="개발자 되고싶은 분들!?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 되고싶은 분들!?</h2>
                    <h3>프론트엔드 무료 교육과정 참여하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_6"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={10}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/livetalk28"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성장하는 개발자가 되려면?"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/livetalk28" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                        alt="성장하는 개발자가 되려면?"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>성장하는 개발자가 되려면?</h2>
                    <h3>OOO 검색하지 말 것!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/livetalk28"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={11}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/21_12_s08_b01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="UX 디자이너의 커리어 설계"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/21_12_s08_b01" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg"
                        alt="UX 디자이너의 커리어 설계"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>UX 디자이너의 커리어 설계</h2>
                    <h3>브랜드 가치를 더하는 디자인</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/21_12_s08_b01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={12}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/portfolio_contents_29cm"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="포트폴리오를 부탁해!"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/portfolio_contents_29cm" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                        alt="포트폴리오를 부탁해!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>포트폴리오를 부탁해!</h2>
                    <h3>디자이너의 포폴 살펴보기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/portfolio_contents_29cm"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={13}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="https://youtu.be/VLiACiB2lXw"
                  data-link-kind="CUSTOM_URL"
                  data-content-title="해, 커리어 EP 02 공개"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a
                      href="https://youtu.be/VLiACiB2lXw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                        alt="해, 커리어 EP 02 공개"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>해, 커리어 EP 02 공개</h2>
                    <h3>마지막 관문 2라운드의 승자는?</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/VLiACiB2lXw"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={14}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/hrclass220106"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="2022년 달라지는 노동법령"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/hrclass220106" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                        alt="2022년 달라지는 노동법령"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>2022년 달라지는 노동법령</h2>
                    <h3>노무관리 쟁점 한 눈에 파악하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/hrclass220106"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={15}
              tabIndex={-1}
              className="slick-slide slick-center slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/pre_onboarding_course_7"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="마케팅 주니어를 찾습니다"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp Image_Image__active___6EY5">
                    <a href="/events/pre_onboarding_course_7" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                        alt="마케팅 주니어를 찾습니다"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                    <h2>마케팅 주니어를 찾습니다</h2>
                    <h3>1월 17일(월) 설명회 신청하기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/pre_onboarding_course_7"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={16}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/velog01"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="개발자 성장 비결 공개!"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/velog01" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                        alt="개발자 성장 비결 공개!"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>개발자 성장 비결 공개!</h2>
                    <h3>Velog, 글 쓰는 개발자들의 이야기</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/velog01"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={17}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
              style={{ width: 1060 }}
            >
              <div>
                <div
                  data-attribute-id="home__mainBanner__click"
                  data-landing-uri="/events/wantedcon24"
                  data-link-kind="EVENT_DETAIL"
                  data-content-title="성과를 내는 마케팅"
                  tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="Image_Image__T6WBp">
                    <a href="/events/wantedcon24" >
                      <img
                        src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                        alt="성과를 내는 마케팅"
                        className="Image_Image__image__Y2rLN"
                      />
                    </a>
                  </div>
                  <div className="Information_Information__SwERN">
                    <h2>성과를 내는 마케팅</h2>
                    <h3>실제 사례를 공개합니다!</h3>
                    <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                    <a
                      href="/events/wantedcon24"
                      className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"

                    >
                      <span className="Button_Button__label__1Kk0v">
                        바로가기
                        <span className="Button_Button__endIcon__MpDfc">
                          <span className="SvgIcon_SvgIcon__root__8vwon">
                            <svg
                              className="SvgIcon_SvgIcon__root__svg__DKYBi"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </SlickTrack>
        </SlickList>
      </SlickSlideContainer>

    </>
  )
}

export default SlickSlider;
