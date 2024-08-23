import { Link } from "react-router-dom";
import styles from "./bond.module.css";

function Bond({ Icon, text, to }) {
  return (
    <Link to={to} className={styles.bond}>
      <Icon className={styles.icon} />
      {text && <span className={styles.text}>{text}</span>}
    </Link>
  );
}

export default Bond;
