/**
 * 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
입출력 예
numbers	result
[1, 2, 3, 4, 5]	20
[0, 31, 24, 10, 1, 9]	744
입출력 예 설명
입출력 예 #1

두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
입출력 예 #1

두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
 */

function solution(numbers) {
  var answer = 0;
  let number = numbers.sort((a, b) => b - a);
  answer = number[0] * number[1];
  return answer;
}
/**
 * ## 

`sort()` 함수를 사용해 배열을 내림차순으로 만들어줍니다.

예시) [1,2,3,4,5] ⇒ [5,4,3,2,1]

해당 배열의 0번째 인덱스(첫 번째 요소)와 1번째 인덱스(두 번째 요소)를 곱해줍니다.
 */
