import React from "react";
import styles from "./major.module.css";
import Bond from "./bond";
import { ReactComponent as listSVG } from "../../img/list.svg";
import { ReactComponent as createSVG } from "../../img/create.svg";

interface MajorProps {
  children: React.ReactNode;
}

function Major({ children }: MajorProps) {
  return (
    <div className={styles.major}>
      <aside className={styles.aside}>
        <Bond to="/list" text="Lista de Metas" Icon={listSVG} />

        <Bond to="/new" text="Nueva Meta" Icon={createSVG} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Major;
