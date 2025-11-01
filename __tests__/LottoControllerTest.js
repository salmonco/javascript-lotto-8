import { MissionUtils } from "@woowacourse/mission-utils";
import { LottoController } from "../src/controllers/LottoController.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("LottoControllerTest", () => {
  test("readPrice", () => {
    mockQuestions(["8000"]);
    const lottoController = new LottoController();

    // when
    const pricePromise = lottoController.readPrice();

    // then
    return pricePromise.then((price) => {
      expect(price).toBe(8000);
    });
  });

  test("readWinningNumbers", () => {
    mockQuestions(["1,2,3,4,5,6"]);
    const lottoController = new LottoController();

    // when
    const winningNumbersPromise = lottoController.readWinningNumbers();

    // then
    return winningNumbersPromise.then((winningNumbers) => {
      expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  test("readBonusNumber", () => {
    mockQuestions(["7"]);
    const lottoController = new LottoController();

    // when
    const bonusNumberPromise = lottoController.readBonusNumber();

    // then
    return bonusNumberPromise.then((bonusNumber) => {
      expect(bonusNumber).toBe(7);
    });
  });
});
