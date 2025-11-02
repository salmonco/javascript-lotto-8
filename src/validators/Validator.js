import { BonusNumberValidator } from "./BonusNumberValidator.js";
import { PriceValidator } from "./PriceValidator.js";
import { WinningNumberValidator } from "./WinningNumberValidator.js";

export const Validator = {
  validatePrice: (price) => {
    Object.values(PriceValidator).forEach((validate) => validate(price));
  },

  validateWinningNumbers: (winningNumbers) => {
    Object.values(WinningNumberValidator).forEach((validate) =>
      validate(winningNumbers)
    );
  },

  validateBonusNumber: (bonusNumber, winningNumbers) => {
    Object.values(BonusNumberValidator).forEach((validate) =>
      validate(bonusNumber, winningNumbers)
    );
  },
};
