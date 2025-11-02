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
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  },
};
