import styles from './page.module.scss';
import getDataForHomepage from './fetchUtils/getDataForHomepage';
import { TCountry } from '@/app/types/countryTypes';
import Homepage from '@/components/Homepage';

export default async function Home() {
  const fetchedList = await getDataForHomepage();

  const countryList = fetchedList.sort((a: TCountry, b: TCountry) => a.name.common.localeCompare(b.name.common));

  if (countryList.length > 0) {
    return (
      <main className={styles.main}>
        <Homepage countryList={countryList} />
      </main>
    );
  }
}
