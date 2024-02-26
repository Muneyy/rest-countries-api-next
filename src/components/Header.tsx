'use client';

import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [currentTheme, setCurrentTheme] = useState<string | null>();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, []);

  function toggleThemeClick() {
    const currentColorTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentColorTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  }

  const renderLogo = () => {
    if (currentTheme === 'light') {
      return (
        <>
          <FontAwesomeIcon icon={faSun} />
          <p>Light mode</p>
        </>
      );
    } else if (currentTheme === 'dark') {
      return (
        <>
          <FontAwesomeIcon icon={faMoon} />
          <p>Dark mode</p>
        </>
      );
    }
  };

  return (
    <section className={styles.headerContainer}>
      <Link className={styles.headerTitle} href={'/'} aria-label="Link to homepage">
        Where in the world?
      </Link>
      <button type="button" aria-label="Toggle dark mode" className={styles.themeButton} onClick={toggleThemeClick}>
        {renderLogo()}
      </button>
    </section>
  );
}
