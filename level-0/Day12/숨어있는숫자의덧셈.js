/**
 * 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
입출력 예
my_string	result
"aAb1B2cC34oOp"	10
"1a2b3c4d123"	16
입출력 예 설명
입출력 예 #1

"aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
입출력 예 #2

"1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.
유의사항
연속된 숫자도 각각 한 자리 숫자로 취급합니다.
 */

function solution(my_string) {
  let regex = /[0-9]/g;
  var answer = my_string
    .match(regex)
    .map((e) => parseInt(e))
    .reduce((acc, curr) => acc + curr);
  return answer;
}

/**
 * 정규표현식과 `match()` 함수를 사용해 숫자들을 걸러냅니다.

`map()` 함수를 사용해 숫자 타입으로 바꾼 뒤 `reduce()` 함수를 사용해 배열의 요소들을 하나씩 더 해 누계값을 계산합니다.
 */
