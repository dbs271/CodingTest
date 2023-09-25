/**
 * 문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.
입출력 예
array	result
[1, 8, 3]	[8, 1]
[9, 10, 11, 8]	[11, 2]
입출력 예 설명
입출력 예 #1

1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.
입출력 예 #2

9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.
 */

function solution(array) {
  var answer = [];
  let arr = [...array].sort((a, b) => b - a);
  answer.push(arr[0], array.indexOf(arr[0]));
  return answer;
}
/**
 * ## 

스프레드 연산자를 통해 원본 배열을 복사합니다.

복사한 배열을 `sort` 메서드를 사용해 내림차순으로 정렬한 뒤

빈 배열 `answer`에 복사한 배열 `arr`의 0번째 인덱스와 `indexOf` 메서드로 원본 배열에서 찾은 `arr`의 0번째 인덱스 요소의 인덱스 번호를 담습니다.
 */
