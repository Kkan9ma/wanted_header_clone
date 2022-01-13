function NavTop() {
  return (
    <>
      <div className="MainBar_MainBar_nav_top__wXy52">
        <div className="MainBar_MainBar_nav_top_logo__Y_Q5D"><button type="button" aria-label="jobCategoryMenuButton"
          data-attribute-id="gnb" data-gnb-kind="jobCategoryMenu" className="MainBar_hamberger__yQfei"><img
            src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu"
            style={{ width: "17px", height: "14px", objectFit: "contain", }}
          />
        </button><a href="/"
          className="MainBar_MainBar_logo__bGymr" aria-label="homeLink" data-attribute-id="gnb"
          data-gnb-kind="home"><i className="icon-logo_new"></i></a></div>
        <button id="gnbSignupBtn"
          className="xsSignUpButton isLoggedIn" type="button" data-attribute-id="gnb"
          data-gnb-kind="signupLogin">회원가입하기</button>
      </div>
    </>
  )
}

export default NavTop;
