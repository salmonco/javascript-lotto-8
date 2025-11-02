import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 에러 발생 시 에러 메시지 출력 후 다시 입력 받기
 */
export const readLoop = async (readFunction) => {
  try {
    const input = await readFunction();
    return input;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return readLoop(readFunction);
  }
};
