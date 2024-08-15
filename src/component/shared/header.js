import styles from"./header.module.css";
import { ReactComponent as LogoSVG } from '../img/logo.svg'
import { ReactComponent as UserSVG } from '../img/icon.svg'
import Bond from "./bond";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
       <LogoSVG />
        <a className={styles.titleApp} href="/user">Metas App</a>
      </div>
      <nav>
      <Bond 
        href="/user" 
        Bond={UserSVG}
        />
      </nav>
    </header>
  );
}

export default Header;
