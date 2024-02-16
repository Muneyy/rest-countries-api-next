// parse and sort the necessary values from currencies
// and languages objects from rest-countries api
export default function renderKeyValuePairs(data: Record<string, { name: string } | string>, label: string) {
  const textInputs: string[] = [];
  const tempArr = Object.entries(data);

  // extract text values from the objects
  tempArr.forEach((item) => {
    const value = label === 'Currencies' ? (item[1] as { name: string })?.name : (item[1] as string);
    if (value) {
      textInputs.push(value);
    }
  });

  const sortedInputs = textInputs.sort();

  return (
    <p>
      <b>{label}: </b>
      {sortedInputs.map((key, index, array) => (
        <span key={key}>
          {key}
          {index === array.length - 1 ? null : ', '}
        </span>
      ))}
    </p>
  );
}
