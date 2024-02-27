import React, { SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Searchbar.module.scss';

export default function Searchbar({ setSearch }: { setSearch: React.Dispatch<SetStateAction<string>> }) {
  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="search" placeholder={'Search for a country...'} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
