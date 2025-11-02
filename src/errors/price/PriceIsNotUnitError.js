import { LOTTO_PRICE_UNIT } from "../../constants/lotto.js";
import { formatToWon } from "../../utils/formatToWon.js";
import { AppError } from "../AppError.js";

const PRICE_MUST_BE_UNIT = `구입 금액은 ${formatToWon(LOTTO_PRICE_UNIT)} 단위여야 합니다.`;

export class PriceIsNotUnitError extends AppError {
  constructor(message = PRICE_MUST_BE_UNIT) {
    super(message);
    this.name = "WinningNumberDuplicateError";
  }
}
