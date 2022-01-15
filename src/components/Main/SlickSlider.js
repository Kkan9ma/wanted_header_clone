import styled from 'styled-components';
import SlickSlide from './SlickSlide';

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
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg'}
              cardTitle={'개발자 되고싶은 분들!?'} cardSubTitle={'프론트엔드 무료 교육과정 참여하기'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1484/b2853456.jpg'}
              cardTitle={'성장하는 개발자가 되려면?'} cardSubTitle={'OOO 검색하지 말 것!'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1488/baa54448.jpg'}
              cardTitle={'UX 디자이너의 커리어 설계'} cardSubTitle={'브랜드 가치를 더하는 디자인'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg'}
              cardTitle={'포트폴리오를 부탁해!'} cardSubTitle={'디자이너의 포폴 살펴보기'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg'}
              cardTitle={'해, 커리어 EP 02 공개'} cardSubTitle={'마지막 관문 2라운드의 승자는?'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg'}
              cardTitle={'2022년 달라지는 노동법령'} cardSubTitle={'노무관리 쟁점 한 눈에 파악하기'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1490/0b775035.jpg'}
              cardTitle={'마케팅 주니어를 찾습니다'} cardSubTitle={'1월 17일(월) 설명회 신청하기'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'}
              cardTitle={'개발자 성장 비결 공개!'} cardSubTitle={'Velog, 글 쓰는 개발자들의 이야기'}
            />
            <SlickSlide
              imageURL={'https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg'}
              cardTitle={'성과를 내는 마케팅'} cardSubTitle={'실제 사례를 공개합니다!'}
            />
          </SlickTrack>
        </SlickList>
      </SlickSlideContainer>

    </>
  )
}

export default SlickSlider;
