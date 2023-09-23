/**
 * ### **문제 설명**

문자열 `s`가 매개변수로 주어집니다. `s`에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

---

### 제한사항

- 0 < `s`의 길이 < 1,000
- `s`는 소문자로만 이루어져 있습니다.

---

### 입출력 예

| s | result |
| --- | --- |
| "abcabcadc" | "d" |
| "abdc" | "abcd" |
| "hello" | "eho" |

---

### 입출력 예 설명

입출력 예 #1

- "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.

입출력 예 #2

- "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.

입출력 예 #3

- "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.
 */

function solution(s) {
  var answer = s
    .split("")
    .filter((e, index, arr) => arr.indexOf(e) === arr.lastIndexOf(e))
    .sort()
    .join("");
  return answer;
}

/**
 * ## 

`lastIndexOf`: **`lastIndexOf()`**값 메서드 는 `[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)`이 문자열을 검색하고 지정된 하위 문자열이 마지막으로 나타나는 인덱스를 반환합니다.

매개변수 `s`를 `split`을 통해 펼쳐 배열로 만듭니다. `filter`를 사용해 배열 안에 요소 index 번호와 마지막으로 나타나는 인덱스 번호가 일치할 경우에만 값을 반환합니다. 반환한 값을 오름차순으로 정렬한 뒤 문자열로 붙여줍니다.
 */
