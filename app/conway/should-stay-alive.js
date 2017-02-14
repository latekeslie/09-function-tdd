import aliveNeighbors from './alive-neighbors';

export default function (a) {
  const sum = aliveNeighbors(a);
  if (sum > 0 && sum < 4) {
    return true;
  }

  return false;
}
