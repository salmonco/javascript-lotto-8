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

  getAllWinningStatus(lottos) {
    // const { winningCount, isWinningBonusNumber } = lotto.getWinningStatus()
    //  return [ { winningCount, isWinningBonusNumber }, {}, ]
  }

  getWinningStatus(lottos) {
    // const [{}, {}, ] = getAllWinningStatus(lottos)
    // contants 사용해서 보여줄 데이터(등수에 따른 당첨수)만 맵핑
    //   return { 1등: 1, 2등: 0, 3등: 0, }
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
