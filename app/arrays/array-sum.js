export default function (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i += 1) {
    sum = sum + a[i];
  }

  return sum;
}
