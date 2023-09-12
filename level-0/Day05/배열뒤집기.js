/**
 * ### **문제 설명**

정수가 들어 있는 배열 `num_list`가 매개변수로 주어집니다. `num_list`의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `num_list`의 길이 ≤ 1,000
- 0 ≤ `num_list`의 원소 ≤ 1,000

---

### 입출력 예

| num_list | result |
| --- | --- |
| [1, 2, 3, 4, 5] | [5, 4, 3, 2, 1] |
| [1, 1, 1, 1, 1, 2] | [2, 1, 1, 1, 1, 1] |
| [1, 0, 1, 1, 1, 3, 5] | [5, 3, 1, 1, 1, 0, 1] |

---

### 입출력 예 설명

입출력 예 #1

- `num_list`가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.

입출력 예 #2

- `num_list`가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.

입출력 예 #3

- `num_list`가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.
 */

// reverse 함수를 사용
function solution(num_list) {
  var answer = num_list.reverse();
  return answer;
}

// reverse 함수를 사용하지만 원본 배열은 유지
function solution(num_list) {
  var answer = [...num_list].reverse();
  return answer;
}

/**
 * or 문을 사용해서 해결할 수도 있습니다.

배열의 순서는 0부터 시작하지만 length를 사용하여 길이를 나타낼 때는 1부터 시작하기에 배열의 끝 순서를 맞추기 위해 length에 -1을 해줍니다.

(ex. num_list = 3 일 때 배열의 순서는 0, 1, 2 입니다. 하지만 length를 사용해 배열의 길이를 찾는다면 3으로 나오기에 배열 끝 순서를 찾기 위해 length에 -1을 해줍니다.)

반복문을 돌면서 i는 1씩 작아집니다.

(예시로 2번째 값을 돌고나면 1씩 작아지므로 다음 1번째 값을 찾고 그 다음 0번째 값을 찾습니다.)

그 다음 push 메서드를 통해 배열의 i번째 값을 answer 변수에 담아줍니다.

(위에서 처음 찾은 값(2번째 값)부터 순서대로 answer 변수에 담습니다.)
 */

function solution(num_list) {
  var answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
}
