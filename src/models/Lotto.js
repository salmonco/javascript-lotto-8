class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  /**
   * 번호를 오름차순 정렬한 문자열 반환
   */
  toString() {}

  /**
   * 사용자가 구매한 로또 번호와 당첨 번호를 비교해서 맞은 상태 구하기
   * @returns 6개 숫자 중 몇 개 맞췄는지, 보너스 번호 맞춘 여부
   */
  getWinningStatus(winnigNumbers, bonusNumber) {}
}

export default Lotto;
