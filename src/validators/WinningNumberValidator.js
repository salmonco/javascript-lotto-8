import { throwError } from "../utils/throwError.js";

const WINNING_NUMBER_COUNT = 6;

const WINNING_NUMBERS_MUST_NOT_EXCEED_COUNT = `당첨 번호는 ${WINNING_NUMBER_COUNT}개여야 합니다.`;

const WINNING_NUMBERS_MUST_BE_UNIQUE = "당첨 번호는 중복될 수 없습니다.";

export const WinningNumberValidator = {
  WINNING_NUMBERS_MUST_NOT_EXCEED_COUNT: (winningNumbers) => {
    if (winningNumbers.length !== WINNING_NUMBER_COUNT) {
      throwError(WINNING_NUMBERS_MUST_NOT_EXCEED_COUNT);
    }
  },

  WINNING_NUMBERS_MUST_BE_UNIQUE: (winningNumbers) => {
    const uniqueNumbers = new Set(winningNumbers);
    if (uniqueNumbers.size !== winningNumbers.length) {
      throwError(WINNING_NUMBERS_MUST_BE_UNIQUE);
    }
  },
};
