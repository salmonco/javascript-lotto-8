export const Validator = {
  validatePrice: (price) => {
    if (Number.isNaN(Number(price))) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
  },

  validateWinningNumbers: (winningNumbers) => {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    const uniqueNumbers = new Set(winningNumbers);
    if (uniqueNumbers.size !== winningNumbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  },

  validateBonusNumber: (bonusNumber, winningNumbers) => {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  },
};
