// https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits
// function to add commas every three digits in a number
// for better readability
export default function commafy(num: number) {
  const str = num.toString().split('.');
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}
