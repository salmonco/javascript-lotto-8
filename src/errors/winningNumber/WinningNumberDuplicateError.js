import { AppError } from "../AppError.js";

const WINNING_NUMBERS_MUST_BE_UNIQUE = "당첨 번호는 중복될 수 없습니다.";

export class WinningNumberDuplicateError extends AppError {
  constructor(message = WINNING_NUMBERS_MUST_BE_UNIQUE) {
    super(message);
    this.name = "WinningNumberDuplicateError";
  }
}
