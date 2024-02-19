'use client';

import { TCountry } from '@/app/types/countryTypes';
import Link from 'next/link';
import styles from './Homepage.module.scss';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Homepage({ countryList }: { countryList: TCountry[] }) {
  const [sortedList, setSortedList] = useState<TCountry[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setSortedList(countryList);
  }, []);

  useEffect(() => {
    setSortedList(
      countryList.filter((country: TCountry) => country.name.common.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder={'Search for a country...'} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <section className={styles.cardsContainer}>
        {sortedList.map((country: TCountry) => (
          <Link key={country.name.common} href={`/${country.cca3}`}>
            <CountryCard
              flags={country.flags}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
