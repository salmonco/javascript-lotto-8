import { LOTTO_PRICE_UNIT } from "../constants/lotto.js";
import { formatToWon } from "../utils/formatToWon.js";
import { throwError } from "../utils/throwError.js";

const PRICE_MUST_BE_NUMBER = "구입 금액은 숫자여야 합니다.";
const PRICE_MUST_BE_POSITIVE = "구입 금액은 양수여야 합니다.";
const PRICE_MUST_BE_INTEGER = "구입 금액은 정수여야 합니다.";
const PRICE_MUST_BE_UNIT = `구입 금액은 ${formatToWon(LOTTO_PRICE_UNIT)} 단위여야 합니다.`;

export const PriceValidator = {
  PRICE_MUST_BE_NUMBER: (price) => {
    if (Number.isNaN(Number(price))) {
      throwError(PRICE_MUST_BE_NUMBER);
    }
  },
  PRICE_MUST_BE_POSITIVE: (price) => {
    if (Number(price) <= 0) {
      throwError(PRICE_MUST_BE_POSITIVE);
    }
  },
  PRICE_MUST_BE_INTEGER: (price) => {
    if (!Number.isInteger(Number(price))) {
      throwError(PRICE_MUST_BE_INTEGER);
    }
  },
  PRICE_MUST_BE_UNIT: (price) => {
    if (Number(price) % LOTTO_PRICE_UNIT !== 0) {
      throwError(PRICE_MUST_BE_UNIT);
    }
  },
};
