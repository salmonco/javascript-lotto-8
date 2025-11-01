export class LottoController {
  start() {
    // input
    // const priceInput = View.input.readPrice(); // 구입금액을 입력해 주세요.
    // const price = InputParser.parsePrice(priceInput);

    // const lottoCount = LottoManager.getLottoCount(price);
    // const lottoGenerator = new LottoGenerator(lottoCount);
    // const lottos = lottoGenerator.getLottos();

    // output
    // View.output.printLottoCount(); // 8개를 구매했습니다.
    // View.output.printLottos(lottos);

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
}
