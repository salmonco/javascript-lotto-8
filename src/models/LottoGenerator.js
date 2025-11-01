import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export class LottoGenerator {
  #lottoCount;

  #lottos = [];

  /**
   * lottoCount만큼 로또 객체 생성해서 lottos에 저장
   */
  constructor(lottoCount) {
    this.#lottoCount = lottoCount;
    this.#generateLottos();
  }

  #generateLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const numbers = this.#generateRandomNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  get lottos() {
    return this.#lottos;
  }

  /**
   * 1~45까지 범위의 랜덤 숫자를 6개 뽑기 (중복X)
   */
  #generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  /**
   * lotto.toString()을 ‘\n’으로 join
   */
  toString() {}
}
