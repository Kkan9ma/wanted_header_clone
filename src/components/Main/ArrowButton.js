import styled from 'styled-components';

const ArrowButtonTemplate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: .5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  
  
  left: ${({ direction }) =>
    direction === 'prev' && 'calc((100% - 1210px) / 2)'
  };

  right: ${({ direction }) =>
    direction === 'next' && 'calc((100% - 1210px) / 2)'
  };
`

const ArrowButtonSvgContainer = styled.span`
  width: 100 %;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`

const ArrowButtonSvg = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  font-size: inherit;
  overflow: hidden;

  left: ${({ direction }) =>
    direction === 'prev' && 'calc((100% - 1210px) / 2)'
  };

  right: ${({ direction }) =>
    direction === 'next' && 'calc((100% - 1210px) / 2)'
  };

`

function ArrowButton({ direction }) {
  const prevArrowButtonPath = `m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z`;
  const nextArrowButtonPath = `m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z`;

  return (
    <>
      <ArrowButtonTemplate direction={direction}>
        <ArrowButtonSvgContainer>
          <ArrowButtonSvg>
            {direction === 'prev' ?
              <path d={prevArrowButtonPath}></path> :
              <path d={nextArrowButtonPath}></path>
            }
          </ArrowButtonSvg>
        </ArrowButtonSvgContainer>
      </ArrowButtonTemplate >
    </>
  )
}

export default ArrowButton;
