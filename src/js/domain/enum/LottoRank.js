export const LottoRank = Object.freeze({
  FIRST: { rank: 1, reward: 2_000_000_000 },
  SECOND: { rank: 2, reward: 30_000_000 },
  THIRD: { rank: 3, reward: 1_500_000 },
  FOURTH: { rank: 4, reward: 50_000 },
  FIFTH: { rank: 5, reward: 5000 },
  NOTHING: { rank: "nothing", reward: 0 },

  getRank(hitCount, isHitBonusNumber) {
    if (hitCount === 6) {
      return LottoRank.FIRST;
    }

    if (hitCount === 5 && isHitBonusNumber) {
      return LottoRank.SECOND;
    }

    if (hitCount === 5) {
      return LottoRank.THIRD;
    }

    if (hitCount === 4) {
      return LottoRank.FOURTH;
    }

    if (hitCount === 3) {
      return LottoRank.FIFTH;
    }

    return LottoRank.NOTHING;
  },
});
