export const InputParser = {
  parsePrice: (input) => Number(input),

  parseWinningNumbers: (input) => {
    const splitNumbers = InputParser.splitByComma(input);
    const winningNumbers = InputParser.parseToNumbers(splitNumbers);
    return winningNumbers;
  },

  splitByComma: (input) => input.split(","),

  parseToNumbers: (inputs) => inputs.map(Number),
};
