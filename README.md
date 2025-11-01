### LottoController

// input
const priceInput = View.input.readPrice() // 구입금액을 입력해 주세요.
const price = InputParser.parsePrice(priceInput)

const lottoCount = LottoManager.getLottoCount(price)
const lottoGenerator = new LottoGenerator(lottoCount)
const lottos = lottoGenerator.getLottos()

// output
View.output.printLottoCount() // 8개를 구매했습니다.
View.output.printLottos(lottos)
O
// input
const winningNumbersInput = // 당첨 번호를 입력해 주세요.
const winningNumbers =

// input
const bonusNumberInput = // 보너스 번호를 입력해 주세요.
const bonusNumber =

// output
View.output.printWinningStats(LottoManger.getWinningStatus(lottos)) // 당첨 통계\n—{}
View.output.printRateOfReturn() // 총 수익률은 62.5%입니다.

### Lotto

- #numbers
- validate
- toString - 번호를 오름차순 정렬한 문자열 반환

* getWinningStatus - 사용자가 구매한 로또 번호와 당첨 번호를 비교해서 맞은 상태 구하기(winnigNumbers, bonusNumber)
  - return { 6개 숫자 중 몇 개 맞췄는지, 보너스 번호 맞춘 여부 }

LottoGenerator

- #lottos
- lottoCount만큼 로또 객체 생성해서 lottos에 저장
  - const numbers =
  - const lotto = new Lotto(numbers)
- 1~45까지 범위의 랜덤 숫자를 6개 뽑기 (중복X)
- toString()
  - lotto.toString()을 ‘\n’으로 join

### LottoManager

- #price
- 구입 금액에 해당하는 만큼 로또 개수 구하기(price)
  - 로또 1장의 가격은 1,000원이다.
  - 1,000으로 나누어지지 않으면 에러 출력
  - return lottoCount

* getAllWinningStatus(lottos)
  - const { winningCount, isWinningBonusNumber } = lotto.getWinningStatus()
  - return [ { winningCount, isWinningBonusNumber }, {}, ]
* getWinningStatus(lottos)
  - const [{}, {}, ] = getAllWinningStatus(lottos)
  * contants 사용해서 보여줄 데이터(등수에 따른 당첨수)만 맵핑
  - return { 1등: 1, 2등: 0, 3등: 0, }
* 로또 당첨금 계산 - calculateWinningPrice(lottos)
  - const {} = getWinningStatus(lottos)
  - contants 사용해서 당첨금 계산
* 수익률 계산
  - calculateWinningPrice(lottos) / price
  - 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

### constants

- 1등부터 5등까지 당첨 기준 금액
  -     	1등: 6개 번호 일치 / 2,000,000,000원
  -     	2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  -     	3등: 5개 번호 일치 / 1,500,000원
  -     	4등: 4개 번호 일치 / 50,000원
  -     	5등: 3개 번호 일치 / 5,000원
  - 예시
    - {
      - 1등: { winningCount: 6, isWinningBonusNumber: false, winningPrice: 2,000,000,000 }
      - 2등: { winningCount: 5, isWinningBonusNumber: true }
      - 3등: { winningCount: 5, isWinningBonusNumber: false }
    - }

### 인풋

- 로또 구입 금액 입력받기

* 당첨 번호 입력받기
* 보너스 번호를 입력받기

### 인풋파서

- 로또 번호를 쉼표(,)를 기준으로 구분하기
- 로또 번호, 보너스 번호를 숫자로 바꾸기

### output

- 발행한 로또 수량 및 번호를 출력
- 당첨 내역 출력
- 수익률을 출력
- printLottos(lottos)
  - lottos.toString()
- printWinningStatsO

### 질문

- 질문: 보너스 번호는 이전 숫자와 중복X 인가? -> 일단 중복 허용
  - 시간 되면 중복 허용X로 바꾸기
- 질문: 보너스 번호를 뽑는다는 것이 사용자로부터 입력받는다는 것인가? -> 그런듯
