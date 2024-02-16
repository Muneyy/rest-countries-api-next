import styles from './CountryCard.module.sass';
import Image from 'next/image';

export default function CountryCard({
  flags,
  name,
  population,
  region,
  capital,
}: {
  flags: {
    svg: string;
    alt: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}) {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={flags.svg} alt={flags.alt} layout="fill" objectFit="cover" />
      </div>
      <section className={styles.details}>
        <h1>{name}</h1>
        <p>
          <b>Population: </b> {population}
        </p>
        <p>
          <b>Region: </b> {region}
        </p>
        <p>
          <b>Capital: </b> {capital}
        </p>
      </section>
    </section>
  );
}
