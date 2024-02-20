export default async function getDataForHomepage() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3');

    if (!res.ok) return undefined;

    const data = await res.json();
    return data;
  } catch (err: unknown) {
    return err;
  }
}
