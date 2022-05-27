import styled from 'styled-components';
import SlickSlide from './SlickSlide';
import { SlickSlideDatas } from '../../datas/SlideDatas';
import ArrowButton from './ArrowButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  margin: 0px;
`;

const SlickTrack = styled.div`
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
`;

function SlickSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay:true,
  };

  return (
    <>
      <SlickSlideContainer>
        <SlickList>
          <SlickTrack>
            <Slider {...settings}>
              {SlickSlideDatas.map(({ imageURL, cardTitle, cardSubTitle }, index) =>
                  <SlickSlide
                  key={index} imageURL={imageURL}
                  cardTitle={cardTitle} cardSubTitle={cardSubTitle}
                />
              )}
            </Slider>
          </SlickTrack>
        </SlickList>
      </SlickSlideContainer>
    </>
  )
}

export default SlickSlider;
