import { MissionUtils } from "@woowacourse/mission-utils";

export const readLoop = async (readFunction, validateFunction) => {
  try {
    const input = await readFunction();
    validateFunction(input);
    return input;
  } catch (error) {
    MissionUtils.Console.print(error.message);
    return readLoop(readFunction, validateFunction);
  }
};
