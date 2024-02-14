import Image from 'next/image';

async function getData({
  params,
}: {
  params: {
    countryName: string;
  };
}) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${params.countryName}`,
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
    <section>
      <Image
        src={fetchedCountry.flags.svg}
        alt={fetchedCountry.flags.alt}
        width={300}
        height={200}
      />
      <h1>{fetchedCountry.name.common}</h1>
      <p>Native Name: {fetchedCountry.altSpellings[1]}</p>
      <p>Population: {fetchedCountry.population}</p>
      <p>Region: {fetchedCountry.region}</p>
      <p>Sub Region: {fetchedCountry.subregion}</p>
      <p>Capital: {fetchedCountry.capital[0]}</p>

      <br />
      <br />

      <p>Top Level Domain: {fetchedCountry.tld[0]}</p>
      <p>
        Languages:{' '}
        {Object.entries(fetchedCountry.languages).map(([key, value]) => (
          <span key={key}>{value as string}, </span>
        ))}
      </p>
    </section>
  );
}
