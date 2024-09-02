import React from "react";
import { Link } from "react-router-dom";
import styles from "./bond.module.css";

interface BondProps {
  Icon: any;
  text: string;
  to: string;
}

function Bond({ Icon, text, to }: BondProps) {
  return (
    <Link to={to} className={styles.bond}>
      <Icon className={styles.icon} />
      {text && <span className={styles.text}>{text}</span>}
    </Link>
  );
}

export default Bond;
