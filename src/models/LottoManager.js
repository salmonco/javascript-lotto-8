import { LOTTO_WINNING_INFO } from "../constants/lotto.js";

// TODO: 1,000으로 나누어지지 않으면 에러 출력
const LOTTO_PRICE_UNIT = 1000;

export class LottoManager {
  #price;

  constructor(price) {
    this.#price = price;
  }

  /**
   * 구입 금액에 해당하는 만큼 로또 개수 구하기(price)
   */
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
      acc[winnerLevel] = this.#getMatchingCount(matchingStatus, winnerLevel);
      return acc;
    }, {});
  }

  #getMatchingStatus(lottos, winningNumbers, bonusNumber) {
    return lottos.map((lotto) =>
      lotto.getMatchingStatus(winningNumbers, bonusNumber)
    );
  }

  #getMatchingCount(matchingStatus, winnerLevel) {
    const winnerInfo = LOTTO_WINNING_INFO[winnerLevel];

    return matchingStatus.filter(
      ({ matchingCount, isMatchingBonusNumber }) =>
        matchingCount === winnerInfo.matchingCount &&
        isMatchingBonusNumber === winnerInfo.isMatchingBonusNumber
    ).length;
  }

  /**
   * 로또 당첨금 계산
   */
  calculateWinningPrice(lottos) {
    //  const {} = getWinningStatus(lottos)
    // contants 사용해서 당첨금 계산
  }

  /**
   * 수익률 계산
   */
  calculateRateOfReturn(lottos) {
    // calculateWinningPrice(lottos) / price
    // 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
  }
}
