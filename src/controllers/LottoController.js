import { InputParser } from "../io/InputParser.js";
import { LottoGenerator } from "../models/LottoGenerator.js";
import { LottoManager } from "../models/LottoManager.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

export class LottoController {
  async start() {
    const price = await this.readPrice();

    const lottoManager = new LottoManager(price);

    const lottoCount = lottoManager.getLottoCount();
    const lottoGenerator = new LottoGenerator(lottoCount);
    const { lottos } = lottoGenerator;

    // output
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottos(lottos);

    // input
    const winningNumbers = await this.readWinningNumbers();

    // input
    const bonusNumber = await this.readBonusNumber();

    // output
    // View.output.printWinningStats(LottoManger.getWinningStatus(lottos)); // 당첨 통계\n—{}
    // View.output.printRateOfReturn(); // 총 수익률은 62.5%입니다.
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
}
