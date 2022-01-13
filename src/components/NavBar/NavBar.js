import Aside from './Aside';
import Menu from './Menu';
import NavTop from './NavTop';

function NavBar() {
  return (
    <>
      <div role="presentation" className="NavBar_className__y2qGg"
        style={{ position: "fixed", paddingRight: "initial" }}
      >
        <div className="MainBar_MainBar__40DX7 isLoggedIn" role="presentation">
          <nav className="MainBar_MainBar_nav__kwHBF">
            <NavTop />
            <Menu />
            <Aside />
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar;
