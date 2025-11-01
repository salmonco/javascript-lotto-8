import { LottoGenerator } from "../src/models/LottoGenerator.js";

describe("LottoGeneratorTest", () => {
  test("getLottos", () => {
    const lottoGenerator = new LottoGenerator(8);
    const { lottos } = lottoGenerator;
    expect(lottos.length).toBe(8);
  });
});
