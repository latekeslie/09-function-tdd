import cardSum from './card-sum';

export default function (card1, card2) {
  if (card1 === card2) {
    return false;
  }

  return cardSum(card1, card2) <= 17;
}
