import React, { SetStateAction, useState } from 'react';
import styles from './FilterSelect.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function FilterSelect({ setRegionFilter }: { setRegionFilter: React.Dispatch<SetStateAction<string>> }) {
  const optionsList = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('Filter by Region');

  return (
    <div className={styles.filterContainer}>
      <button type="submit" className={styles.selectButton} onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <p>{selectedFilter}</p>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={[styles.rotateTransition, showMenu ? styles.rotateIcon : ''].join(' ')}
        />
      </button>
      {showMenu && (
        <div className={styles.optionsList}>
          {optionsList.map((item) => {
            return (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setRegionFilter(item);
                  setSelectedFilter(item);
                  setShowMenu(false);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
