import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_WINNING_INFO } from "../constants/lotto.js";
import { formatToWon } from "../utils/formatToWon.js";

export const OutputView = {
  printLottoCount: (count) =>
    MissionUtils.Console.print(`${count}개를 구매했습니다.`),

  printLottos: (lottos) => {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.toString());
    });
  },

  printWinningStats: (winningStatus) => {
    MissionUtils.Console.print("당첨 통계\n---");

    Object.entries(winningStatus).forEach(
      ([winnerLevel, matchingLottoCount]) => {
        OutputView.printWinningStatsLine(winnerLevel, matchingLottoCount);
      }
    );
  },

  printWinningStatsLine: (winnerLevel, matchingLottoCount) => {
    const { matchingCount, isMatchingBonusNumber, winningPrice } =
      LOTTO_WINNING_INFO[winnerLevel];
    if (isMatchingBonusNumber) {
      MissionUtils.Console.print(
        `${matchingCount}개 일치, 보너스 볼 일치 (${formatToWon(winningPrice)}) - ${matchingLottoCount}개`
      );
      return;
    }
    MissionUtils.Console.print(
      `${matchingCount}개 일치 (${formatToWon(winningPrice)}) - ${matchingLottoCount}개`
    );
  },

  printRateOfReturn: (rateOfReturn) => {
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },
};
