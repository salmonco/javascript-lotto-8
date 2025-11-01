export const Validator = {
  validatePrice: (price) => {
    if (Number.isNaN(Number(price))) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
  },
};
