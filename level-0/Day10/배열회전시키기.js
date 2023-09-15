/**
 * 문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.
입출력 예
numbers	direction	result
[1, 2, 3]	"right"	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]
입출력 예 설명
입출력 예 #1

numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.
입출력 예 #2

numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.
 */
function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}
/**
 * 매개변수 `direction`이 `‘right’`라면 요소를 오른쪽으로 한 칸씩 이동합니다. 이는 배열의 맨 뒤 요소를 제거(`pop()` 함수 사용)하고 맨 앞에 놓습니다. (`unshift()` 함수 사용)

예시) [1, 2, 3, 4, 5] 배열의 맨 뒤 요소를 제거 ⇒ [1, 2, 3, 4]

제거한 요소를 맨 앞에 배치합니다. ⇒ [5, 1, 2, 3, 4]

`direction`이 `‘right’`가 아니라면 (`’left’`라면) 요소를 왼쪽으로 한 칸씩 이동시킵니다. 이는 위와 반대로 배열의 맨 앞 요소를 제거(`shift()` 함수를 사용)하고 맨 뒤에 배치합니다.(`push()` 함수 사용)

예시) [1, 2, 3, 4, 5] 배열의 맨 앞 요소를 제거 ⇒ [2, 3, 4, 5]

제거한 요소를 맨 뒤에 배치합니다. ⇒ [2, 3, 4, 5, 1]
 */
