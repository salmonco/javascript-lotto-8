import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("getMatchingStatus", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [4, 5, 6, 7, 8, 9];
    const bonusNumber = 10;

    const { matchingCount, isMatchingBonusNumber } = lotto.getMatchingStatus(
      winningNumbers,
      bonusNumber
    );

    expect(matchingCount).toBe(3);
    expect(isMatchingBonusNumber).toBe(false);
  });
});
