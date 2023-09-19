// ## 문제

// ### **문제 설명**

// 문자열 배열 `strlist`가 매개변수로 주어집니다. `strlist` 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 1 ≤ `strlist` 원소의 길이 ≤ 100
// - `strlist`는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

// ---

// ### 입출력 예

// | strlist | result |
// | --- | --- |
// | ["We", "are", "the", "world!"] | [2, 3, 3, 6] |
// | ["I", "Love", "Programmers."] | [1, 4, 12] |

// ---

// ### 입출력 예 설명

// 입출력 예 #1

// - ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

// 입출력 예 #2

// - ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.

// ---

// ## 풀이

// `for 문`을 사용해서 `strlist`의 길이미만 만큼 반복합니다.

// `strlist`의 i번째(반복되는 요소)의 길이를 변수 `answer`의 `push()` 메서드를 사용해서 담습니다.

function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}
