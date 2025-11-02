import { AppError } from "../AppError.js";

const PRICE_MUST_BE_POSITIVE = "구입 금액은 양수여야 합니다.";

export class PriceIsNotPositiveError extends AppError {
  constructor(message = PRICE_MUST_BE_POSITIVE) {
    super(message);
    this.name = "PriceIsNotPositiveError";
  }
}
