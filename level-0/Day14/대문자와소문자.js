/**
 * ### **문제 설명**

문자열 `my_string`이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`은 영어 대문자와 소문자로만 구성되어 있습니다.

---

### 입출력 예

| my_string | result |
| --- | --- |
| "cccCCC" | "CCCccc" |
| "abCdEfghIJ" | "ABcDeFGHij" |

---

### 입출력 예 설명

입출력 예 #1

- 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.

입출력 예 #2

- 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.

---

## 풀이

`toUpperCase()`: 소문자를 대문자로 바꿔줍니다.

`toLowerCase()`: 대문자를 소문자로 바꿔줍니다.

`for 문`을 사용해 매개변수 `my_string`의 길이만큼 반복합니다.

만약 `my_string`의 `i`번째 인덱스가 해당 인덱스의 대문자와 같다면 변수 `answer`에는 해당 요소를 소문자로 변환해서 넣어줍니다.

예시) `my_string[i] = S` 일 때, `toUpperCase`를 사용해 대문자로 변환한 `my_string`의 `i` 번째 요소를 비교합니다.

⇒ `my_string[i] = S, my_string[i].toUpperCase() = S`  , 이 경우 해당 요소를 소문자로 변경합니다.

대문자가 아닐 경우 `toLowerCase`를 사용해 소문자로 변환한 뒤 변수 `answer`에 담습니다.

```jsx

```
 */

function solution(my_string) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      answer += my_string[i].toLowerCase();
    } else {
      answer += my_string[i].toUpperCase();
    }
  }
  return answer;
}
