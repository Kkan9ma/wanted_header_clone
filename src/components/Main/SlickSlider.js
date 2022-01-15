import styled from 'styled-components';
import SlickSlide from './SlickSlide';
import { SlickSlideDatas } from '../../datas/SlideDatas';

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

function SlickSlider() {
  return (
    <>
      <SlickSlideContainer>
        <SlickList>
          <SlickTrack>  {/* todo: animation */}
            {SlickSlideDatas.map(({ imageURL, cardTitle, cardSubTitle }, index) =>
              <SlickSlide
                key={index} imageURL={imageURL}
                cardTitle={cardTitle} cardSubTitle={cardSubTitle}
              />
            )}
          </SlickTrack>
        </SlickList>
      </SlickSlideContainer>

    </>
  )
}

export default SlickSlider;
