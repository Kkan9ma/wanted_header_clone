import styled from 'styled-components';

const SlickSlideContainer = styled.div`
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

  @media (max-width: 767px) and (max-width: 1199px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`;

const SlideImageAnchor = styled.a`

  filter: brightness(100%);
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;

  @media (max-width: 767px) and (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
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

function SlickSlide({ imageURL, cardTitle, cardSubTitle }) {
  return (
    <>
      <SlickSlideContainer>
        <MarginDivision>
          <SlideImageBanner>
            <SlideImageContainer>
              <SlideImageAnchor> {/* // TODO: 다른 width에 따른 다른 사이즈 이미지 파일  */}
                <SlideImage src={imageURL} />
              </SlideImageAnchor>
            </SlideImageContainer>
            <SlideImageInfoContainer>
              <ImageInfoCardTitle>
                {cardTitle}
              </ImageInfoCardTitle>
              <ImageInfoCardSubTitle>
                {cardSubTitle}
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
      </SlickSlideContainer>
    </>
  )
}

export default SlickSlide;
