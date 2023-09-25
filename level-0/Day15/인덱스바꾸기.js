/**
 * 문제 설명
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 < my_string의 길이 < 100
0 ≤ num1, num2 < my_string의 길이
my_string은 소문자로 이루어져 있습니다.
num1 ≠ num2
입출력 예
my_string	num1	num2	result
"hello"	1	2	"hlelo"
"I love you"	3	6	"I l veoyou"
입출력 예 설명
입출력 예 #1

"hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.
입출력 예 #2

"I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.
 */

function solution(my_string, num1, num2) {
  var answer = my_string.split("");
  let a = answer[num1];
  let b = answer[num2];
  answer.splice(num1, 1, b);
  answer.splice(num2, 1, a);
  return answer.join("");
}

/**
 * `splice`: 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

변수 `answer`에 문자인 매개변수 `my_string`을 `split` 메서드를 사용해서 배열로 만들어 담아줍니다.

변수를 만들어 `answer`의 `num1` 번째 인덱스와 `num2` 번째 인덱스를 각각 할당해줍니다.

`splice` 메서드를 사용해 `num1`부터 1번째 요소를 삭제하고 위에서 선언한 변수 `b`를 채워넣습니다.

위와 같은 방식으로 `num2` 부터 1번째 요소를 삭제하고 변수 `a` (`answer`의 `num1`번째 요소)를 채워넣습니다.

이제 `join` 메서드를 사용해 문자 배열을 붙여 문자로 만들어줍니다.
 */
