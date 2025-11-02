import { LOTTO_NUMBER_COUNT } from "../constants/lotto.js";
import { WinningNumberDuplicateError } from "../errors/winningNumber/WinningNumberDuplicateError.js";
import { WinningNumberExceedCountError } from "../errors/winningNumber/WinningNumberExceedCountError.js";

export const WinningNumberValidator = {
  WINNING_NUMBERS_MUST_NOT_EXCEED_COUNT: (winningNumbers) => {
    if (winningNumbers.length !== LOTTO_NUMBER_COUNT) {
      throw new WinningNumberExceedCountError();
    }
  },

  WINNING_NUMBERS_MUST_BE_UNIQUE: (winningNumbers) => {
    const uniqueNumbers = new Set(winningNumbers);
    if (uniqueNumbers.size !== winningNumbers.length) {
      throw new WinningNumberDuplicateError();
    }
  },
};
