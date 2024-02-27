import commafy from '@/helperFunctions/commafy';
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
        <Image
          src={flags.svg}
          alt={flags.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className={styles.flagImage}
        />
      </div>
      <section className={styles.details}>
        <h1>{name}</h1>
        <p>
          <b>Population: </b> {commafy(population)}
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
