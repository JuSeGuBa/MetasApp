import "./header.css";
import { ReactComponent as LogoSVG } from '../img/logo.svg'
import { ReactComponent as UserSVG } from '../img/icon.svg'

function Header() {
  return (
    <header className="header">
      <div className="logo">
       <LogoSVG />
        <a className="titleApp" href="/perfil">Metas App</a>
      </div>
      <nav>
        <a href="/perfil" className="bond">
          <UserSVG />
        </a>
      </nav>
    </header>
  );
}

export default Header;
