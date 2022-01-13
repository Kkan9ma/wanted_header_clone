function Menu() {
  return (
    <>
      <ul className="Menu_className__gGcYQ">
        <li className="xsHomeButton xsOnly selectedNav" data-attribute-id="gnb" data-gnb-kind="home"><a href="/"
          className="" aria-label="">홈</a></li>
        <li className="" data-attribute-id="gnb" data-gnb-kind="jobs"><a href="/jobsfeed" className="" aria-label="">채용</a>
        </li>
        <li className="" data-attribute-id="gnb" data-gnb-kind="event"><a href="/events" className="" aria-label="">이벤트</a>
        </li>
        <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="salary"><a href="/salary" className=""
          aria-label="">직군별 연봉</a></li>
        <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="resume"><a href="/cv" className=""
          aria-label="">이력서</a></li>
        <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="community"><a href="/community" className=""
          aria-label="">커뮤니티
          <em></em>
        </a>
        </li>
        <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="freelancer"><a
          href="https://www.wanted.co.kr/gigs/experts" className="" aria-label="" target="_blank"
          rel="noopener noreferrer">프리랜서</a></li>
        <li className="smMoreVisible" data-attribute-id="gnb" data-gnb-kind="aiScore"><a href="/aiscore/resume" className=""
          aria-label="">AI 합격예측<span>

          </span></a></li>
      </ul>
    </>
  )
}

export default Menu;
