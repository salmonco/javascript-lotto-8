import { LOTTO_PRICE_UNIT, LOTTO_WINNING_INFO } from "../constants/lotto.js";

export class LottoManager {
  #price;

  constructor(price) {
    this.#price = price;
  }

  /**
   * 소수점 둘째 자리에서 반올림
   */
  static #roundToSecondDecimalPlace(value) {
    return value.toFixed(1);
  }

  getLottoCount() {
    return this.#price / LOTTO_PRICE_UNIT;
  }

  getWinningStatus(lottos, winningNumbers, bonusNumber) {
    const matchingStatus = this.#getMatchingStatus(
      lottos,
      winningNumbers,
      bonusNumber
    );

    return Object.keys(LOTTO_WINNING_INFO).reduce((acc, winnerLevel) => {
      acc[winnerLevel] = this.#getMatchingLottoCount(
        matchingStatus,
        winnerLevel
      );
      return acc;
    }, {});
  }

  #getMatchingStatus(lottos, winningNumbers, bonusNumber) {
    return lottos.map((lotto) =>
      lotto.getMatchingStatus(winningNumbers, bonusNumber)
    );
  }

  #getMatchingLottoCount(matchingStatus, winnerLevel) {
    const winnerInfo = LOTTO_WINNING_INFO[winnerLevel];

    return matchingStatus.filter(
      ({ matchingCount, isMatchingBonusNumber }) =>
        matchingCount === winnerInfo.matchingCount &&
        isMatchingBonusNumber === winnerInfo.isMatchingBonusNumber
    ).length;
  }

  /**
   * 수익률 계산
   */
  calculateRateOfReturn(lottos, winningNumbers, bonusNumber) {
    const value =
      this.#calculateWinningPrice(lottos, winningNumbers, bonusNumber) /
      this.#price;
    return LottoManager.#roundToSecondDecimalPlace(value * 100);
  }

  /**
   * 로또 당첨금 계산
   */
  #calculateWinningPrice(lottos, winningNumbers, bonusNumber) {
    const winningStatus = this.getWinningStatus(
      lottos,
      winningNumbers,
      bonusNumber
    );

    return Object.keys(winningStatus).reduce((acc, winnerLevel) => {
      const { winningPrice } = LOTTO_WINNING_INFO[winnerLevel];
      const count = winningStatus[winnerLevel];
      return acc + count * winningPrice;
    }, 0);
  }
}
