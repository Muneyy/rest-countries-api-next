import React, { SetStateAction, useState } from 'react';
import styles from './FilterSelect.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faClose } from '@fortawesome/free-solid-svg-icons';

const OPTIONS_LIST = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];
const DEFAULT_TEXT = 'Filter by Region';

const FilterSelect = ({ setRegionFilter }: { setRegionFilter: React.Dispatch<SetStateAction<string>> }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>(DEFAULT_TEXT);

  const handleRegionButtonClick = (item: string) => {
    setRegionFilter(item);
    setSelectedFilter(item);
    setShowMenu(false);
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setRegionFilter('');
    setSelectedFilter(DEFAULT_TEXT);
    setShowMenu(false);
  };

  return (
    <div className={styles.filterContainer}>
      <button
        type="submit"
        className={styles.selectButton}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
        aria-label="open region filter options (contained in a div)"
      >
        <p>{selectedFilter}</p>
        <div className={styles.symbolsContainer}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={[styles.rotateTransition, showMenu ? styles.rotateIcon : ''].join(' ')}
          />
          {selectedFilter !== DEFAULT_TEXT && (
            <button type="button" aria-label="reset region filter" onClick={(e) => handleCloseClick(e)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          )}
        </div>
      </button>
      {showMenu && (
        <div
          className={styles.optionsList}
          role="combobox"
          aria-controls="displays selected region as text of the button"
          aria-expanded={showMenu}
          aria-label="list of options for the region filter"
        >
          {OPTIONS_LIST.map((item) => (
            <button type="button" key={item} onClick={() => handleRegionButtonClick(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
