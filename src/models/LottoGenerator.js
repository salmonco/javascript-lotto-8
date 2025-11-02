import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export class LottoGenerator {
  #lottos = [];

  /**
   * lottoCount만큼 로또 객체 생성해서 lottos에 저장
   */
  constructor(lottoCount) {
    this.#generateLottos(lottoCount);
  }

  /**
   * 1~45까지 범위의 랜덤 숫자를 6개 뽑기 (중복X)
   */
  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  /**
   * lotto.toString()을 ‘\n’으로 join
   */
  toString() {
    return this.#lottos.map((lotto) => lotto.toString()).join("\n");
  }

  #generateLottos(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const numbers = LottoGenerator.generateRandomNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  get lottos() {
    return this.#lottos;
  }
}
