/**
 * ### **문제 설명**

문자열 `my_string`이 매개변수로 주어집니다. `my_string`을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `my_string`의 길이 ≤ 1,000

---

### 입출력 예

| my_string | return |
| --- | --- |
| "jaron" | "noraj" |
| "bread" | "daerb" |

---

### 입출력 예 설명

입출력 예 #1

- `my_string`이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

입출력 예 #2

- `my_string`이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
 */

function solution(my_string) {
  var answer = my_string.split("").reverse().join("");
  return answer;
}
/**
 * # **split() 함수**

> string.split(separator, limit)
> 
- split() 함수는,문자열을 'separator'로 잘라서,'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴합니다.
- separator
    - 필수 아님
    - 문자열을 잘라 줄 구분자 (문자열 또는 정규식)
    - 값이 입력되지 않으면 문자열 전체를 배열에 담아서 리턴합니다.
- limit
    - 필수 아님
    - 최대 분할 갯수

split 함수를 사용헤서 문자열을 잘라 배열로 만든 뒤 reverse 함수를 사용해 순서를 반대로 정의합니다. 그 다음 join 함수를 통해 나누어진 문자들을 붙여주면 해결
 */
