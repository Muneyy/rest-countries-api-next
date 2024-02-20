import React, { SetStateAction } from 'react';
import styles from './FilterSelect.module.scss';

export default function FilterSelect({
  regionFilter,
  setRegionFilter,
}: {
  regionFilter: string;
  setRegionFilter: React.Dispatch<SetStateAction<string>>;
}) {
  const optionsList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <select
      name="filter-by-region"
      aria-label="Filter displayed countries based on selected region"
      className={styles.select}
      value={regionFilter}
      onChange={(e) => setRegionFilter(e.target.value)}
    >
      <option value="">Filter by Region</option>
      {optionsList.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}
