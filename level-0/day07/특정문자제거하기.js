/**
 * ### **문제 설명**

문자열 `my_string`과 문자 `letter`이 매개변수로 주어집니다. `my_string`에서 `letter`를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 100
- `letter`은 길이가 1인 영문자입니다.
- `my_string`과 `letter`은 알파벳 대소문자로 이루어져 있습니다.
- 대문자와 소문자를 구분합니다.

---

### 입출력 예

| my_string | letter | result |
| --- | --- | --- |
| "abcdef" | "f" | "abcde" |
| "BCBdbe" | "B" | "Cdbe" |

---

### 입출력 예 설명

입출력 예 #1

- "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.

입출력 예 #2

- "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
 */

function solution(my_string, letter) {
  var answer = my_string
    .split("")
    .filter((i) => i !== letter)
    .join("");
  return answer;
}

/**
 * `my_string`을 `split` 함수로 쪼개 배열로 만들어 줍니다.

이후 `filter 함수`를 사용해 배열을 순회하여 `letter`가 아닌 아이템을 찾습니다.

이후 `join` 메서드를 통해 문자를 이어붙여줍니다.
 */
