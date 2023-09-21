/**
 * 정수 배열 `array`와 정수 `n`이 매개변수로 주어질 때, `array`에 들어있는 정수 중 `n`과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `array`의 길이 ≤ 100
- 1 ≤ `array`의 원소 ≤ 100
- 1 ≤ `n` ≤ 100
- 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

---

### 입출력 예

| array | n | result |
| --- | --- | --- |
| [3, 10, 28] | 20 | 28 |
| [10, 11, 12] | 13 | 12 |

---

### 입출력 예 설명

입출력 예 #1

- 3, 10, 28 중 20과 가장 가까운 수는 28입니다.

입출력 예 #2

- 10, 11, 12 중 13과 가장 가까운 수는 12입니다.
 */

function solution(array, n) {
  var answer = 0;
  let min = [];
  array = array.sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) return n;
    min[i] = Math.abs(array[i] - n);
  }
  let minNum = Math.min(...min);
  let minIndex = min.indexOf(minNum);
  answer = array[minIndex];
  return answer;
}

/**
 * 변수를 하나 만들고 빈 배열을 할당합니다.

매개변수 `array`를 오름차순으로 정렬한 뒤

`for 문`을 사용해 `array`의 길이만큼 반복합니다. 이때 `array`의 요소 중 매개변수 `n`과 일치하는 값이 있다면 그 값을 리턴합니다. 예시) array[i] = 3, n = 3 일 경우 가장 가까운 수는 n이기 때문

선언해둔 빈 배열의 `i`번째 요소로 `Math.abs`(절댓값) 메서드를 사용해 반복되는 `array`의 `i` 번째 요소 - `n` 을 할당합니다.

반복문을 빠져나와 변수를 선언 한 뒤 `Math.min`(최소값) 메서드를 사용해 변수 `min`의 요소 중 가장 작은 값을 찾습니다.

변수를 하나 더 만들고 `indexOf` 메서드를 사용해서 `min` 변수의 `minNum`(`min` 요소 중 가장 작은 값)의 인덱스 번호를 찾습니다. 

이제 `answer` 변수에 최소값의 인덱스 번호를 담은 `minNum`을 `array`에 넣어준 뒤 할당합니다.
 */
