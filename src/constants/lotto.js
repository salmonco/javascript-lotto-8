// - 1등부터 5등까지 당첨 기준 금액
//   -     	1등: 6개 번호 일치 / 2,000,000,000원
//   -     	2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
//   -     	3등: 5개 번호 일치 / 1,500,000원
//   -     	4등: 4개 번호 일치 / 50,000원
//   -     	5등: 3개 번호 일치 / 5,000원
const LOTTO_WINNING_INFO = {
  "1등": {
    winningCount: 6,
    isWinningBonusNumber: false,
    winningPrice: 2_000_000_000,
  },
  "2등": {
    winningCount: 5,
    isWinningBonusNumber: true,
    winningPrice: 30_000_000,
  },
  "3등": {
    winningCount: 5,
    isWinningBonusNumber: false,
    winningPrice: 1_500_000,
  },
  "4등": { winningCount: 4, isWinningBonusNumber: false, winningPrice: 50_000 },
  "5등": { winningCount: 3, isWinningBonusNumber: false, winningPrice: 5_000 },
};
