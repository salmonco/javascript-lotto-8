import { AppError } from "../AppError.js";

const LOTTO_NUMBERS_MUST_BE_UNIQUE = "로또 번호는 중복될 수 없습니다.";

export class LottoNumberDuplicateError extends AppError {
  constructor(message = LOTTO_NUMBERS_MUST_BE_UNIQUE) {
    super(message);
    this.name = "LottoNumberDuplicateError";
  }
}
