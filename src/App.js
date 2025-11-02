import { LottoController } from "./controllers/LottoController.js";

class App {
  async run() {
    try {
      const lottoController = new LottoController();
      await lottoController.start();
    } catch (error) {
      // TODO: 에러 서브클래싱
      if (error instanceof Error) {
        console.log(error.message);
      }
      throw error;
    }
  }
}

export default App;
