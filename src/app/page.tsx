import CountryCard from '@/components/CountryCard';
import styles from './page.module.scss';
import Link from 'next/link';

async function getData() {
  try {
    // TODO: fetch border countries using country code
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3');

    if (!res.ok) return undefined;

    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

type TCountry = {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  cca3: string;
};

export default async function Home() {
  const data = await getData();
  const fetchedList = await data;

  const countryList = fetchedList.sort((a: TCountry, b: TCountry) => a.name.common.localeCompare(b.name.common));

  if (countryList.length > 0) {
    return (
      <main className={styles.main}>
        {countryList.map((country: TCountry) => (
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
      </main>
    );
  }
}
