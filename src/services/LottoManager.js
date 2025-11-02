import { LOTTO_PRICE_UNIT, LOTTO_WINNING_INFO } from "../constants/lotto.js";
import { LottoGenerator } from "../models/LottoGenerator.js";

export class LottoManager {
  #price;

  #lottoGenerator;

  constructor(price) {
    this.#price = price;
    const lottoCount = this.getLottoCount();
    this.#lottoGenerator = new LottoGenerator(lottoCount);
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

  getLottos() {
    return this.#lottoGenerator.lottos;
  }

  // TODO: 리팩토링 필요
  getWinningStatus(winningNumbers, bonusNumber) {
    const matchingStatus = this.#getMatchingStatus(winningNumbers, bonusNumber);

    return Object.keys(LOTTO_WINNING_INFO).reduce((acc, winnerLevel) => {
      acc[winnerLevel] = this.#getMatchingLottoCount(
        matchingStatus,
        winnerLevel
      );
      return acc;
    }, {});
  }

  #getMatchingStatus(winningNumbers, bonusNumber) {
    return this.getLottos().map((lotto) =>
      lotto.getMatchingStatus(winningNumbers, bonusNumber)
    );
  }

  // TODO: 리팩토링 필요
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
  calculateRateOfReturn(winningNumbers, bonusNumber) {
    const value =
      this.#calculateWinningPrice(winningNumbers, bonusNumber) / this.#price;
    return LottoManager.#roundToSecondDecimalPlace(value * 100);
  }

  /**
   * 로또 당첨금 계산
   */
  #calculateWinningPrice(winningNumbers, bonusNumber) {
    const winningStatus = this.getWinningStatus(winningNumbers, bonusNumber);

    return Object.keys(winningStatus).reduce((acc, winnerLevel) => {
      const { winningPrice } = LOTTO_WINNING_INFO[winnerLevel];
      const count = winningStatus[winnerLevel];
      return acc + count * winningPrice;
    }, 0);
  }

  get lottoGenerator() {
    return this.#lottoGenerator;
  }
}
