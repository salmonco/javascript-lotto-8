import { MissionUtils } from "@woowacourse/mission-utils";

export const readLoop = async (readFunction) => {
  try {
    const input = await readFunction();
    return input;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return readLoop(readFunction);
  }
};
