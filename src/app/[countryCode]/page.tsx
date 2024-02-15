import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import { notFound } from 'next/navigation';
import renderKeyValuePairs from '@/helperFunctions/renderKeyValuePairs';
import commafy from '@/helperFunctions/commafy';

async function getData(countryCode: string) {
  try {
    // TODO: fetch border countries using country code
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,flags,population,region,subregion,capital,languages,currencies,tld,altSpellings,borders`
    );

    if (!res.ok) return undefined;

    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

export default async function CountryDetails({
  params,
}: {
  params: {
    countryCode: string;
  };
}) {
  const data = await getData(params.countryCode);

  if (!data) {
    return notFound();
  }

  // const fetchedCountry = await data;
  const { flags, name, altSpellings, population, region, subregion, capital, tld, currencies, languages, borders } =
    await data;

  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <BackButton />
        <div className={styles.flagImage}>
          <Image src={flags.svg} alt={flags.alt} layout="fill" />
        </div>
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
            {borders.sort().map((border: string) => {
              return (
                <Link href={`/${border}`} key={border} aria-label={`Link to ${border}`} className={styles.borderLink}>
                  <button type="button">{border}</button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
