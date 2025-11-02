import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER_COUNT } from "../constants/lotto.js";
import Lotto from "./Lotto.js";

export class LottoGenerator {
  #lottos = [];

  constructor(lottoCount) {
    this.#generateLottos(lottoCount);
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      LOTTO_NUMBER_COUNT
    );
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
