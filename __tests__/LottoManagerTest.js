import { LottoManager } from "../src/models/LottoManager.js";

describe("LottoManagerTest", () => {
  test("getLottoCount", () => {
    const lottoManager = new LottoManager(8000);

    // when
    const lottoCount = lottoManager.getLottoCount();

    // then
    expect(lottoCount).toBe(8);
  });
});
