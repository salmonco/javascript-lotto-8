import { LOTTO_NUMBER_COUNT } from "../../constants/lotto.js";
import { AppError } from "../AppError.js";

const LOTTO_NUMBERS_MUST_NOT_EXCEED_COUNT = `로또 번호는 ${LOTTO_NUMBER_COUNT}개여야 합니다.`;

export class LottoNumberExceedCountError extends AppError {
  constructor(message = LOTTO_NUMBERS_MUST_NOT_EXCEED_COUNT) {
    super(message);
    this.name = "LottoNumberExceedCountError";
  }
}
