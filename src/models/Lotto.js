import { LottoNumberDuplicateError } from "../errors/lottoNumber/LottoNumberDuplicateError.js";
import { LottoNumberExceedCountError } from "../errors/lottoNumber/LottoNumberExceedCountError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 사용자가 구매한 로또 번호와 당첨 번호를 비교해서 맞은 상태 구하기
   * @returns 추첨 숫자 중 몇 개 맞췄는지, 보너스 번호 맞춘 여부
   */
  getMatchingStatus(winningNumbers, bonusNumber) {
    const matchingCount = this.#getMatchingCount(winningNumbers);
    const isMatchingBonusNumber = this.#isMatchingBonusNumber(bonusNumber);
    return { matchingCount, isMatchingBonusNumber };
  }

  /**
   * 번호를 오름차순 정렬한 문자열 반환
   */
  toString() {
    return `[${this.#getSortedNumbers().join(", ")}]`;
  }

  #validate(numbers) {
    if (!this.#isValidNumberLength(numbers)) {
      throw new LottoNumberExceedCountError();
    }

    if (!this.#isUniqueNumbers(numbers)) {
      throw new LottoNumberDuplicateError();
    }
  }

  #isValidNumberLength(numbers) {
    return numbers.length === 6;
  }

  #isUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size === numbers.length;
  }

  #getSortedNumbers() {
    return this.#numbers.slice().sort((a, b) => a - b);
  }

  #getMatchingCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  #isMatchingBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
