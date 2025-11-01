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
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    const lottoController = new LottoController();

    // when
    const pricePromise = lottoController.readPrice();

    // then
    return pricePromise.then((price) => {
      expect(price).toBe(8000);
    });
  });
});
