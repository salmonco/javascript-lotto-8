import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export class LottoGenerator {
  #lottos = [];

  constructor(lottoCount) {
    this.#generateLottos(lottoCount);
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

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
