/**
 * ### **문제 설명**

정수 `num1`, `num2`가 매개변수로 주어질 때, `num1`을 `num2`로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 0 < `num1` ≤ 100
- 0 < `num2` ≤ 100

---

### 입출력 예

| num1 | num2 | result |
| --- | --- | --- |
| 10 | 5 | 2 |
| 7 | 2 | 3 |

---

### 입출력 예 설명

입출력 예 #1

- `num1`이 10, `num2`가 5이므로 10을 5로 나눈 몫 2를 return 합니다.

입출력 예 #2

- `num1`이 7, `num2`가 2이므로 7을 2로 나눈 몫 3을 return 합니다.
 */

function solution(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}

// or

function solution(num1, num2) {
  var answer = parseInt(num1 / num2);
  return answer;
}

/**
 * 나눗셈 연산자를 사용하면 7 / 2 의 경우 3.5라는 값이 출력된다. 소숫점 방지를 위해 Math.floor를 사용하면 문제 해결, Math.floor는 소숫점을 버리는 함수입니다.
이 방법 외에도 parseInt를 사용하여 문제를 해결할 수도 있습니다. parseInt 함수는 문자열을 정수로 변환하는 함수입니다. 이를 사용해 소수로 출력되던 7/2의 문제를 정수로 변환해 소숫점을 버리고 3이 출력됩니다.
 */
