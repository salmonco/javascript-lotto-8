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
    const price = await readLoop(this.readPrice);

    this.#lottoManager = new LottoManager(price);

    const lottoCount = this.#lottoManager.getLottoCount();
    this.#lottoGenerator = new LottoGenerator(lottoCount);

    this.#printLottoStatus();

    const { winningNumbers, bonusNumber } = await this.readNumbersLoop();

    this.#getResult(winningNumbers, bonusNumber);
  }

  async readPrice() {
    const priceInput = await InputView.readPrice();
    Validator.validatePrice(priceInput);
    const price = InputParser.parsePrice(priceInput);
    return price;
  }

  async readNumbersLoop() {
    const winningNumbers = await readLoop(this.readWinningNumbers);
    const bonusNumber = await readLoop(() =>
      this.readBonusNumber(winningNumbers)
    );
    return { winningNumbers, bonusNumber };
  }

  async readWinningNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    const winningNumbers = InputParser.parseWinningNumbers(winningNumbersInput);
    Validator.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async readBonusNumber(winningNumbers) {
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
    const winningStats = this.#lottoManager.getWinningStatus(
      this.#lottoGenerator.lottos,
      winningNumbers,
      bonusNumber
    );

    OutputView.printWinningStats(winningStats);
    OutputView.printRateOfReturn(
      this.#lottoManager.calculateRateOfReturn(
        this.#lottoGenerator.lottos,
        winningNumbers,
        bonusNumber
      )
    );
  }
}
