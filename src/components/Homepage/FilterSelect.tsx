import React, { SetStateAction } from 'react';
import styles from './FilterSelect.module.scss';

export default function FilterSelect({ setRegionFilter }: { setRegionFilter: React.Dispatch<SetStateAction<string>> }) {
  return (
    <select
      name="filter-by-region"
      aria-label="Filter displayed countries based on selected region"
      className={styles.select}
      onChange={(e) => setRegionFilter(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
