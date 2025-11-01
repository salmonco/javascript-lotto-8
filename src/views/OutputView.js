import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_WINNING_INFO } from "../constants/lotto.js";

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
        const { matchingCount, winnerPrice } = LOTTO_WINNING_INFO[winnerLevel];
        MissionUtils.Console.print(
          `${matchingCount}개 일치 (${winnerPrice}원) - ${matchingLottoCount}개`
        );
      }
    );
  },
};
