import { LOTTO_PRICE_UNIT } from "../constants/lotto.js";
import { PriceIsNotIntegerError } from "../errors/price/PriceIsNotIntegerError.js";
import { PriceIsNotNumberError } from "../errors/price/PriceIsNotNumberError.js";
import { PriceIsNotPositiveError } from "../errors/price/PriceIsNotPositiveError.js";
import { PriceIsNotUnitError } from "../errors/price/PriceIsNotUnitError.js";

export const PriceValidator = {
  PRICE_MUST_BE_NUMBER: (price) => {
    if (Number.isNaN(Number(price))) {
      throw new PriceIsNotNumberError();
    }
  },
  PRICE_MUST_BE_POSITIVE: (price) => {
    if (Number(price) <= 0) {
      throw new PriceIsNotPositiveError();
    }
  },
  PRICE_MUST_BE_INTEGER: (price) => {
    if (!Number.isInteger(Number(price))) {
      throw new PriceIsNotIntegerError();
    }
  },
  PRICE_MUST_BE_UNIT: (price) => {
    if (Number(price) % LOTTO_PRICE_UNIT !== 0) {
      throw new PriceIsNotUnitError();
    }
  },
};
