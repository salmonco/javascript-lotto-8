import { LottoGenerator } from "../models/LottoGenerator.js";
import { LottoManager } from "../models/LottoManager.js";
import { InputParser } from "../utils/InputParser.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

export class LottoController {
  async start() {
    const price = await this.readPrice();

    const lottoManager = new LottoManager(price);

    const lottoCount = lottoManager.getLottoCount();
    const lottoGenerator = new LottoGenerator(lottoCount);
    const { lottos } = lottoGenerator;

    this.printLottoStatus(lottoCount, lottos);

    const winningNumbers = await this.readWinningNumbers();
    const bonusNumber = await this.readBonusNumber();

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
    const price = InputParser.parsePrice(priceInput);
    return price;
  }

  async readWinningNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    const winningNumbers = InputParser.parseWinningNumbers(winningNumbersInput);
    return winningNumbers;
  }

  async readBonusNumber() {
    const bonusNumberInput = await InputView.readBonusNumber();
    const bonusNumber = InputParser.parseBonusNumber(bonusNumberInput);
    return bonusNumber;
  }

  printLottoStatus(lottoCount, lottos) {
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottos(lottos);
  }
}
