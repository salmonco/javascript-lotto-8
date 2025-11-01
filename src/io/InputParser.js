export const InputParser = {
  parsePrice: (input) => Number(input),

  parseWinningNumbers: (input) => {
    const splitNumbers = InputParser.splitByComma(input);
    const winningNumbers = InputParser.parseToNumbers(splitNumbers);
    return winningNumbers;
  },

  parseBonusNumber: (input) => Number(input),

  splitByComma: (input) => input.split(","),

  parseToNumbers: (inputs) => inputs.map(Number),
};
