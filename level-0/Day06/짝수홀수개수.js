/**
 * ### **문제 설명**

정수가 담긴 리스트 `num_list`가 주어질 때, `num_list`의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

---

### 제한사항

- 1 ≤ `num_list`의 길이 ≤ 100
- 0 ≤ `num_list`의 원소 ≤ 1,000

---

### 입출력 예

| num_list | result |
| --- | --- |
| [1, 2, 3, 4, 5] | [2, 3] |
| [1, 3, 5, 7] | [0, 4] |

---

### 입출력 예 설명

입출력 예 #1

- [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

입출력 예 #2

- [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.
 */

function solution(num_list) {
  var answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  }
  return answer;
}
/**
 * 먼저 answer 배열의 초기값을 정의해준다. ⇒ `asnwer[0,0]`

그 다음 `for 반복문`을 사용해 `num_list` 의 길이만큼 반복하고

`if 문`을 사용해 num_list의 i번째 값이 2로 나누었을 때 몫이 0이라면 (짝수라면) answer의 첫번째(0) 값에 1을 더 해줍니다.

만약 num_list의 i번째 값이 2로 나누었을 때 몫이 0이 아니라면(홀수라면)

answer의 두번째(1) 값에 1을 더 해줍니다.

그런 다음 answer을 리턴합니다.
 */

// 이는 삼항 연산자로 간단하게 풀어낼 수 있습니다.

function solution(num_list) {
  var answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? (answer[0] += 1) : (answer[1] += 1);
  }
  return answer;
}

// 혹은 filter 함수를 사용해서 문제를 해결할 수도 있습니다.
function solution(num_list) {
  const evenLength = num_list.filter((n) => n % 2 === 0).length;
  return [evenLength, num_list.length - evenLength];
}
