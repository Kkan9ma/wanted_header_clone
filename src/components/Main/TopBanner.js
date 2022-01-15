import styled from 'styled-components';
import SlickSlider from './SlickSlider';
import ArrowButton from './ArrowButton';

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
        <ArrowButton direction='next' />
        <ArrowButton direction='prev' />
      </TopBannerContainer>
    </>
  )
}

export default TopBanner;
