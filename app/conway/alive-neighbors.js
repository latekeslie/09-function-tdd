export default function (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === true) {
      sum = sum + 1;
    }
  }

  return sum;
}
