import React, { SetStateAction, useEffect, useRef, useState } from 'react';
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

  const popupMenu = useRef<HTMLDivElement>(null);
  const showMenuButton = useRef<HTMLButtonElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const outsideClicked = popupMenu.current && !popupMenu.current.contains(e.target as Node);
      const buttonClicked = showMenuButton.current && showMenuButton.current.contains(e.target as Node);

      if (outsideClicked && !buttonClicked) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  // Add keydown event listeners for up, down, and escape keys
  useEffect(() => {
    if (popupMenu.current) {
      popupMenu.current.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (popupMenu.current) {
        const buttons = popupMenu.current.querySelectorAll('button');
        const currentFocusIndex = Array.from(buttons).findIndex((button) => document.activeElement === button);

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextFocusIndex = (currentFocusIndex + 1) % buttons.length;
          buttons[nextFocusIndex].focus();
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevFocusIndex = (currentFocusIndex - 1 + buttons.length) % buttons.length;
          buttons[prevFocusIndex].focus();
        }

        if (e.key === 'Escape') {
          setShowMenu(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showMenu]);

  return (
    <div className={styles.filterContainer}>
      <button
        type="submit"
        className={styles.selectButton}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
        aria-label="open region filter options (contained in a div)"
        ref={showMenuButton}
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
          ref={popupMenu}
        >
          {OPTIONS_LIST.map((item, index) => (
            <button type="button" key={item} onClick={() => handleRegionButtonClick(item)} id={`${index}`}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
