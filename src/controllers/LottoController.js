import { LottoGenerator } from "../models/LottoGenerator.js";
import { LottoManager } from "../models/LottoManager.js";
import { InputParser } from "../utils/InputParser.js";
import { readLoop } from "../utils/readLoop.js";
import { Validator } from "../utils/Validator.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

export class LottoController {
  #lottoManager;

  #lottoGenerator;

  async start() {
    const price = await LottoController.#readPriceLoop();
    this.#lottoManager = new LottoManager(price);

    const lottoCount = this.#lottoManager.getLottoCount();
    this.#lottoGenerator = new LottoGenerator(lottoCount);
    this.#printLottoStatus();

    const { winningNumbers, bonusNumber } =
      await LottoController.#readNumbersLoop();
    this.#getResult(winningNumbers, bonusNumber);
  }

  static #readPriceLoop() {
    return readLoop(LottoController.#readPrice);
  }

  static async #readPrice() {
    const priceInput = await InputView.readPrice();
    Validator.validatePrice(priceInput);
    return InputParser.parsePrice(priceInput);
  }

  static async #readNumbersLoop() {
    const winningNumbers = await readLoop(LottoController.#readWinningNumbers);
    const bonusNumber = await readLoop(() =>
      LottoController.#readBonusNumber(winningNumbers)
    );
    return { winningNumbers, bonusNumber };
  }

  static async #readWinningNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    const winningNumbers = InputParser.parseWinningNumbers(winningNumbersInput);
    Validator.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  static async #readBonusNumber(winningNumbers) {
    const bonusNumberInput = await InputView.readBonusNumber();
    const bonusNumber = InputParser.parseBonusNumber(bonusNumberInput);
    Validator.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  #printLottoStatus() {
    OutputView.printLottoCount(this.#lottoManager.getLottoCount());
    OutputView.printLottos(this.#lottoGenerator);
  }

  #getResult(winningNumbers, bonusNumber) {
    this.#getWinningStats(winningNumbers, bonusNumber);
    this.#getRateOfReturn(winningNumbers, bonusNumber);
  }

  #getWinningStats(winningNumbers, bonusNumber) {
    const winningStats = this.#lottoManager.getWinningStatus(
      this.#lottoGenerator.lottos,
      winningNumbers,
      bonusNumber
    );
    OutputView.printWinningStats(winningStats);
  }

  #getRateOfReturn(winningNumbers, bonusNumber) {
    const rateOfReturn = this.#lottoManager.calculateRateOfReturn(
      this.#lottoGenerator.lottos,
      winningNumbers,
      bonusNumber
    );
    OutputView.printRateOfReturn(rateOfReturn);
  }
}
