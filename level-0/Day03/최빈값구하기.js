/**
 * ### **문제 설명**

최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 `array`가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

---

### 제한사항

- 0 < `array`의 길이 < 100
- 0 ≤ `array`의 원소 < 1000

---

### 입출력 예

| array | result |
| --- | --- |
| [1, 2, 3, 3, 3, 4] | 3 |
| [1, 1, 2, 2] | -1 |
| [1] | 1 |

---

### 입출력 예 설명

입출력 예 #1

- [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.

입출력 예 #2

- [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.

입출력 예 #3

- [1]에는 1만 있으므로 최빈값은 1입니다.
 */

function solution(array) {
  const counter = {};
  let maxCount = 0;

  for (const num of array) {
    counter[num] = (counter[num] || 0) + 1;
    maxCount = Math.max(maxCount, counter[num]);
  }

  const mode = Object.keys(counter).filter((num) => counter[num] === maxCount);

  return mode.length === 1 ? Number(mode[0]) : -1;
}

/**
 * 1. **객체 초기화: `counter`라는 빈 객체를 생성합니다. 이 객체는 배열의 각 요소가 등장하는 횟수를 저장할 것입니다.**
2.  **등장 횟수 계산: 주어진 배열을 순회하며 각 요소가 몇 번 등장하는지 세어 `counter` 객체에 저장합니다. 동시에, `maxCount` 변수를 사용해 지금까지 발견한 최대 등장 횟수를 추적합니다.**
3. **최빈값 찾기: `filter` 함수를 사용해 `counter` 객체에서 최대 등장 횟수(`maxCount`)와 같은 횟수로 등장한 숫자들을 찾아내고, 그 결과를 `mode` 배열에 저장합니다.**
4. **결과 반환: 만약 최빈값이 하나만 있다면 그 값을 반환하고, 그렇지 않다면 -1을 반환합니다.**
 */
