import CountryCard from '@/components/CountryCard';
import styles from './page.module.scss';
import Link from 'next/link';
import getDataForHomepage from './fetchUtils/getDataForHomepage';
import { TCountry } from '@/app/types/countryTypes';
export default async function Home() {
  const data = await getDataForHomepage();
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
