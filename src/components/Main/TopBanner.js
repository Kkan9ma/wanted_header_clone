import styled from 'styled-components';
import NextArrowButton from './NextArrowButton';
import PrevArrowButton from './PrevArrowButton';
import SlickSlider from './SlickSlider';

const TopBannerContainer = styled.div`
  @media (min-width: 1200px) {
    height: auto;
  }
  position: relative;
  overflow: hidden;
`

function TopBanner() {
  return (
    <>
      <TopBannerContainer>
        <SlickSlider />
        <NextArrowButton />
        <PrevArrowButton />
      </TopBannerContainer>
    </>
  )
}

export default TopBanner;
