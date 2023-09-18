/**
 * 문제 설명
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
my_string은 소문자와 공백으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	result
"bus"	"bs"
"nice to meet you"	"nc t mt y"
입출력 예 설명
입출력 예 #1

"bus"에서 모음 u를 제거한 "bs"를 return합니다.
입출력 예 #1

"nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.
 */

function solution(my_string) {
  let gather = ["a", "e", "i", "o", "u"];
  var answer = my_string
    .split("")
    .filter((e) => !gather.includes(e))
    .join("");
  return answer;
}

/**
 * ## 

변수를 만들어 제거할 모음들의 배열을 할당해줍니다.

매개변수 `my_string`의 문자열을 `split()` 함수를 사용해서 배열로 만들어 준 뒤 
`filter()` 함수 안에서는 `includes()` 함수를 사용해 변수 `gather`가 가지고 있는 요소가
 매개변수 `my_string` 안에도 있는지 확인 합니다. 이때 부정문(!)을 통해 `gather`가 가지고 있지 않는 `my_string` 의 요소만 꺼내옵니다. 
 `join()` 함수를 사용해 문자 배열을 붙여 다시 문자열로 만들어줍니다.
 */
