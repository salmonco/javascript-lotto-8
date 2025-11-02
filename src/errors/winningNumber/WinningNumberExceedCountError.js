import { LOTTO_NUMBER_COUNT } from "../../constants/lotto.js";
import { AppError } from "../AppError.js";

const WINNING_NUMBERS_MUST_NOT_EXCEED_COUNT = `당첨 번호는 ${LOTTO_NUMBER_COUNT}개여야 합니다.`;

export class WinningNumberExceedCountError extends AppError {
  constructor(message = WINNING_NUMBERS_MUST_NOT_EXCEED_COUNT) {
    super(message);
    this.name = "WinningNumberExceedCountError";
  }
}
