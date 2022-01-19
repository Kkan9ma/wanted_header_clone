import styled from 'styled-components';
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
      </TopBannerContainer>
    </>
  )
}

export default TopBanner;
