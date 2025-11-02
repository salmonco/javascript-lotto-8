import { AppError } from "../AppError.js";

const PRICE_MUST_BE_NUMBER = "구입 금액은 숫자여야 합니다.";

export class PriceIsNotNumberError extends AppError {
  constructor(message = PRICE_MUST_BE_NUMBER) {
    super(message);
    this.name = "PriceIsNotNumberError";
  }
}
