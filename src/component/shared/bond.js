import styles from './bond.module.css';

function Bond({Bond, text, href}) {
    return (
        <a href={href} className={styles.bond}>
            <Bond className={styles.bond} />
            {text && <span className={styles.text}>{text}</span>}
        </a>
    );
}

export default Bond;