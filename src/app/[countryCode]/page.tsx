import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import { notFound } from 'next/navigation';
import renderKeyValuePairs from '@/helperFunctions/renderKeyValuePairs';
import commafy from '@/helperFunctions/commafy';
import getDataForCountryDetails from '../fetchUtils/getDataForCountryDetails';

type CountryParams = {
  countryCode: string;
};

export async function generateMetadata({ params }: { params: CountryParams }) {
  return {
    title: `Country Details: ${params.countryCode}`,
    description: `Details for the country with the code ${params.countryCode} from the Rest Countries API.`,
  };
}

export default async function CountryDetails({ params }: { params: CountryParams }) {
  const data = await getDataForCountryDetails(params.countryCode);

  if (!data) {
    return notFound();
  }

  const { flags, name, altSpellings, population, region, subregion, capital, tld, currencies, languages, borders } =
    await data;

  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <BackButton />
        <Image
          src={flags.svg}
          alt={flags.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
          }}
          className={styles.flagImage}
        />
      </div>
      <div className={styles.rightSide}>
        <h1>{name.common}</h1>
        <div className={styles.detailsDivider}>
          <div className={styles.detailsLeftSide}>
            <p>
              <b>Native Name:</b> {altSpellings[1]}
            </p>
            <p>
              <b>Population:</b> {commafy(population)}
            </p>
            <p>
              <b>Region:</b> {region}
            </p>
            <p>
              <b>Sub Region:</b> {subregion}
            </p>
            <p>
              <b>Capital:</b> {capital[0]}
            </p>
          </div>
          <br />
          <div className={styles.detailsRightSide}>
            <p>
              <b>Top Level Domain:</b> {tld[0]}
            </p>
            {renderKeyValuePairs(currencies, 'Currencies')}
            {renderKeyValuePairs(languages, 'Languages')}
          </div>
        </div>
        <div className={styles.bordersDivider}>
          <p>
            <b>Border Countries: </b>
          </p>
          <br />
          <div className={styles.bordersContainer}>
            {borders.length > 0 ? (
              borders.sort().map((border: string) => {
                return (
                  <Link href={`/${border}`} key={border} aria-label={`Link to ${border}`} className={styles.borderLink}>
                    <button type="button">{border}</button>
                  </Link>
                );
              })
            ) : (
              <p>No border countries.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
