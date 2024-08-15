import styles from "./major.module.css";
import Bond from "./bond";
import { ReactComponent as ListSVG } from "../img/list.svg";
import { ReactComponent as CreateSVG } from "../img/create.svg";

function Major({ Children }) {
  return (
    <div className={styles.major}>
      <aside className="styles.aside">

        <Bond 
        href="/lista" 
        text="Lista de Metas" 
        Bond={ListSVG} />

        <Bond 
        href="/crear" 
        text="Nueva Meta" 
        Bond={CreateSVG}/>

      </aside>
      <main className="main">{Children}</main>
    </div>
  );
}

export default Major;
