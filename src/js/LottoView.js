import { LOTTO_PRICE } from "./domain/LottoService";
import { LottoRank } from "./domain/enum/LottoRank";
import { readLine, readInteger } from "./util/ReadLine";

export const askMoney = async () => {
  const input = await readInteger("> 구입금액을 입력해 주세요.");
  return input;
};

export const printBuyingList = (numbersList) => {
  console.log(`${numbersList.length}개를 구매했습니다.`);
  numbersList.forEach((e) => console.log(e));
  console.log("");
};

export const askWinningNumbers = async () => {
  const input = await readLine("> 당첨 번호를 입력해 주세요.\n");
  const winningNumbers = input.split(",").map((e) => parseInt(e));
  return winningNumbers;
};

export const askBonusNumber = async () => {
  const input = await readInteger("> 보너스 번호를 입력해 주세요.\n");
  return input;
};

export const printStats = (stats) => {
  const statsView = `
  당첨 통계
  --------------------
  3개 일치 (5,000원) - ${stats.rankCount.get(LottoRank.FIFTH.rank) ?? 0}개
  4개 일치 (50,000원) - ${stats.rankCount.get(LottoRank.FOURTH.rank) ?? 0}개
  5개 일치 (1,500,000원) - ${stats.rankCount.get(LottoRank.THIRD.rank) ?? 0}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${
    stats.rankCount.get(LottoRank.SECOND.rank) ?? 0
  }개
  6개 일치 (2,000,000,000원) - ${
    stats.rankCount.get(LottoRank.FIRST.rank) ?? 0
  }개
  총 수익률은 ${stats.totalReward / (stats.totalCount * LOTTO_PRICE)}%입니다.`;
  console.log(statsView);
};