import Image from 'next/image';
import styles from './page.module.scss';

async function getData({
  params,
}: {
  params: {
    countryName: string;
  };
}) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${params.countryName}?fields=name,flags,population,region,subregion,capital,languages,currencies,tld,altSpellings,`
    );
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export default async function CountryDetails({
  params,
}: {
  params: {
    countryName: string;
  };
}) {
  const data = await getData({ params });
  const fetchedCountry = await data[0];
  console.log(fetchedCountry);

  return (
    <section className={styles.container}>
      <Image src={fetchedCountry.flags.svg} alt={fetchedCountry.flags.alt} width={300} height={200} />
      <h1>{fetchedCountry.name.common}</h1>
      <p>
        <b>Native Name:</b> {fetchedCountry.altSpellings[1]}
      </p>
      <p>
        <b>Population:</b> {fetchedCountry.population}
      </p>
      <p>
        <b>Region:</b> {fetchedCountry.region}
      </p>
      <p>
        <b>Sub Region:</b> {fetchedCountry.subregion}
      </p>
      <p>
        <b>Capital:</b> {fetchedCountry.capital[0]}
      </p>

      <br />
      <p>
        <b>Top Level Domain:</b> {fetchedCountry.tld[0]}
      </p>
      <p>
        <b>Currencies:</b>{' '}
        {Object.entries(fetchedCountry.currencies).map(([key, value], index, array) => (
          <span key={key}>
            {(value as { name: string }).name as string}
            {index === array.length - 1 ? null : ', '}
          </span>
        ))}
      </p>
      <p>
        <b>Languages:</b>{' '}
        {Object.entries(fetchedCountry.languages).map(([key, value], index, array) => (
          <span key={key}>
            {value as string}
            {index === array.length - 1 ? null : ', '}
          </span>
        ))}
      </p>
    </section>
  );
}
