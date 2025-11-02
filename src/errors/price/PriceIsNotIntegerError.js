import { AppError } from "../AppError.js";

const PRICE_MUST_BE_INTEGER = "구입 금액은 정수여야 합니다.";

export class PriceIsNotIntegerError extends AppError {
  constructor(message = PRICE_MUST_BE_INTEGER) {
    super(message);
    this.name = "PriceIsNotIntegerError";
  }
}
