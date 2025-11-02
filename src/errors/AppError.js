const ERROR_PREFIX = "[ERROR] ";

export class AppError extends Error {
  constructor(message) {
    super(`${ERROR_PREFIX}${message}`);
    this.name = "AppError";
  }
}
