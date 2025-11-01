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
    const winningNumbersInput = "1,2,3,4,5,6"; // 당첨 번호를 입력해 주세요.
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // input
    const bonusNumberInput = "7"; // 보너스 번호를 입력해 주세요.
    const bonusNumber = 7;

    // output
    // View.output.printWinningStats(LottoManger.getWinningStatus(lottos)); // 당첨 통계\n—{}
    // View.output.printRateOfReturn(); // 총 수익률은 62.5%입니다.
  }

  async readPrice() {
    const priceInput = await InputView.readPrice();
    const price = InputParser.parsePrice(priceInput);
    return price;
  }
}
