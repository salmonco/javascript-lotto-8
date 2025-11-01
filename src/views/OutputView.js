import { MissionUtils } from "@woowacourse/mission-utils";

export const OutputView = {
  printLottoCount: (count) =>
    MissionUtils.Console.print(`${count}개를 구매했습니다.`),
};
