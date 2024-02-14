'use client';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header() {
  function toggleThemeClick() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <section className={styles.headerContainer}>
      <Link className={styles.headerTitle} href={'/'}>
        Where in the world?
      </Link>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className={styles.themeButton}
        onClick={toggleThemeClick}
      >
        <FontAwesomeIcon icon={faMoon} />
        <p>Dark Mode</p>
      </button>
    </section>
  );
}
