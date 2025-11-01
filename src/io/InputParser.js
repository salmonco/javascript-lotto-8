export const InputParser = {
  parsePrice: (input) => Number(input),

  splitByComma: (input) => input.split(","),

  parseToNumbers: (inputs) => inputs.map(Number),
};
