'use client';

import { TCountry } from '@/app/types/countryTypes';
import Link from 'next/link';
import styles from './Homepage.module.scss';
import { useEffect, useState } from 'react';
import CountryCard from '../CountryCard';
import Searchbar from './Searchbar';
import FilterSelect from './FilterSelect';

const Homepage = ({ countryList }: { countryList: TCountry[] }) => {
  const [sortedList, setSortedList] = useState<TCountry[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [regionFilter, setRegionFilter] = useState<string>('');

  useEffect(() => {
    setSortedList(countryList);
  }, []);

  useEffect(() => {
    setSortedList(
      countryList.filter(
        (country: TCountry) =>
          country.name.common.toLowerCase().includes(searchFilter.toLowerCase()) &&
          country.region.toLowerCase().includes(regionFilter.toLowerCase())
      )
    );
  }, [searchFilter, regionFilter]);

  const renderFilteredCountries = () => {
    return sortedList.map((country: TCountry) => (
      <Link key={country.name.common} href={`/${country.cca3}`}>
        <CountryCard
          flags={country.flags}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    ));
  };

  return (
    <main className={styles.main}>
      <section className={styles.utilsContainer}>
        <Searchbar setSearch={setSearchFilter} />
        <FilterSelect setRegionFilter={setRegionFilter} />
      </section>
      <section className={styles.cardsContainer}>
        {sortedList.length > 0 ? (
          renderFilteredCountries()
        ) : (
          <span>
            No countries matching &apos;{searchFilter}&apos; was found in the{' '}
            {regionFilter === '' ? ' world.' : `${regionFilter} region.`}
          </span>
        )}
      </section>
    </main>
  );
};

export default Homepage;
