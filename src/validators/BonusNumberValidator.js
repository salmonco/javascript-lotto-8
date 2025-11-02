import { BonusNumberDuplicateError } from "../errors/bonusNumber/BonusNumberDuplicateError.js";

export const BonusNumberValidator = {
  BONUS_NUMBER_MUST_BE_UNIQUE: (bonusNumber, winningNumbers) => {
    if (winningNumbers.includes(bonusNumber)) {
      throw new BonusNumberDuplicateError();
    }
  },
};
