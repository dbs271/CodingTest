/**
 * 문제 설명
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ s의 길이 ≤ 200
-1,000 < s의 원소 중 숫자 < 1,000
s는 숫자, "Z", 공백으로 이루어져 있습니다.
s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
연속된 공백은 주어지지 않습니다.
0을 제외하고는 0으로 시작하는 숫자는 없습니다.
s는 "Z"로 시작하지 않습니다.
s의 시작과 끝에는 공백이 없습니다.
"Z"가 연속해서 나오는 경우는 없습니다.
입출력 예
s	result
"1 2 Z 3"	4
"10 20 30 40"	100
"10 Z 20 Z 1"	1
"10 Z 20 Z"	0
"-1 -2 -3 Z"	-3
입출력 예 설명
입출력 예 #1

본문과 동일합니다.
입출력 예 #2

10 + 20 + 30 + 40 = 100을 return 합니다.
입출력 예 #3

"10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.
입출력 예 #4, #5

설명 생략

※ 공지 - 2022년 11월 30일 제한사항 및 테스트 케이스가 수정되었습니다.
 */

function solution(s) {
  var answer = 0;
  let a = s.split(" ");
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "Z") {
      answer -= parseInt(a[i - 1]);
    } else {
      answer += parseInt(a[i]);
    }
  }
  return parseInt(s.split(" "));
}
/**
 * 공백으로 구분된 매개변수 `s`를 `split()` 함수를 사용해 배열로 만들어줍니다. 

예시) “123Z4” ⇒ [’1’, ‘2’, ‘3’, ‘Z’, ‘4’]

변수를 하나 만든 뒤 해당 배열을 할당해줍니다.

`for 문`을 사용해 반복문을 돌리고

`if문`을 사용해서 변수 `a`의 i번째 인덱스가 ‘Z’일 경우 변수 `answer`에서 a의 i - 1 번째 요소를 빼줍니다.

‘Z’가 인덱스 3일 경우 -1 하므로 2번째 인덱스 요소가 빠집니다.

‘Z’가 아닐 경우 변수 `answer`에 하나씩 더해줍니다. 이때 문자끼리 더해지는 것을 방지하기 위해 `parseInt()` 메서드를  사용해서 숫자 타입으로 바꿔준 뒤에 `answer` 에 요소들을 하나씩 더해줍니다.
 */
