import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <section className={styles.headerContainer}>
      <span className={styles.headerTitle}>Where in the world?</span>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className={styles.themeButton}
      >
        <FontAwesomeIcon icon={faMoon} />
        <p>Dark Mode</p>
      </button>
    </section>
  );
}
