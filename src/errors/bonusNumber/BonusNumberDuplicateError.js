import { AppError } from "../AppError.js";

const BONUS_NUMBER_MUST_BE_UNIQUE =
  "보너스 번호는 당첨 번호와 중복될 수 없습니다.";

export class BonusNumberDuplicateError extends AppError {
  constructor(message = BONUS_NUMBER_MUST_BE_UNIQUE) {
    super(message);
    this.name = "BonusNumberDuplicateError";
  }
}
