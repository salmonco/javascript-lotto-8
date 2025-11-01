import { MissionUtils } from "@woowacourse/mission-utils";

export const InputView = {
  readPrice: () =>
    MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n"),

  readWinningNumbers: () =>
    MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n"),

  readBonusNumber: () =>
    MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n"),
};
