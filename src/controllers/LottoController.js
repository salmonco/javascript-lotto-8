import { LottoGenerator } from "../models/LottoGenerator.js";
import { LottoManager } from "../models/LottoManager.js";
import { InputParser } from "../utils/InputParser.js";
import { readLoop } from "../utils/readLoop.js";
import { Validator } from "../utils/Validator.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

export class LottoController {
  async start() {
    const price = await readLoop(this.readPrice);

    const lottoManager = new LottoManager(price);

    const lottoCount = lottoManager.getLottoCount();
    const lottoGenerator = new LottoGenerator(lottoCount);
    const { lottos } = lottoGenerator;

    this.printLottoStatus(lottoCount, lottos);

    const { winningNumbers, bonusNumber } = await this.readNumbersLoop();

    const winningStats = lottoManager.getWinningStatus(
      lottos,
      winningNumbers,
      bonusNumber
    );

    OutputView.printWinningStats(winningStats);
    OutputView.printRateOfReturn(
      lottoManager.calculateRateOfReturn(lottos, winningNumbers, bonusNumber)
    );
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

  printLottoStatus(lottoCount, lottos) {
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottos(lottos);
  }
}
