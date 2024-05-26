import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  Lotto,
  LOTTO_DIGITS,
} from "./Lotto";
import { drawRandomItems } from "../util/Draw";
import { checkMoney, checkLottos } from "./LottoValidate";

export const LOTTO_PRICE = 1_000;

export const buyLottos = (money) => {
  checkMoney(money);

  const count = Math.trunc(money / LOTTO_PRICE);
  const numbersList = generateLottoNumbers(count);
  const lottos = numbersList.map((e) => new Lotto(e));

  return lottos;
};

export const getNumbersList = (lottos) => lottos.map((e) => e.numbers);

export const getLottoRanks = (lottos, winningNumbers, bonusNumber) => {
  checkLottos(lottos);

  return lottos.map((e) => e.compare(winningNumbers, bonusNumber));
};

export const calculateProfitRate = (lottoQuantity, totalReward) =>
  (totalReward / (lottoQuantity * LOTTO_PRICE)) * 100;

const generateLottoNumbers = (count) => {
  const numbersList = [];

  while (numbersList.length < count) {
    const lottoNumbers = Array(LOTTO_MAX_NUMBER)
      .fill()
      .map((_, i) => i + LOTTO_MIN_NUMBER);

    const numbers = drawRandomItems(lottoNumbers, LOTTO_DIGITS);
    numbersList.push(numbers);
  }

  return numbersList;
};
