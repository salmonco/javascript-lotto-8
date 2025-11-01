import { MissionUtils } from "@woowacourse/mission-utils";

export const InputView = {
  readPrice: () =>
    MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n"),
  // 당첨 번호 입력받기
  // 보너스 번호를 입력받기
};
