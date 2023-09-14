/**
 * 문제 설명
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
2 ≤ numbers의 길이 ≤ 30
0 ≤ numbers의 원소 ≤ 1,000
0 ≤num1 < num2 < numbers의 길이
입출력 예
numbers	num1	num2	result
[1, 2, 3, 4, 5]	1	3	[2, 3, 4]
[1, 3, 5]	1	2	[3, 5]
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.
입출력 예 #2

[1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.
 */

function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}

/**
 * `slice(start, end) 함수`를 사용해 배열에서 추출할 인덱스(num1)와 추출을 끝낼 인덱스(num2)를 넣어줍니다. 

여기서 slice 함수의 end 파라미터는 해당 인덱스를 포함하지 않고 지정된 인덱스 앞에서 추출을 끝냅니다. 그러므로 1을 더해줍니다.
 */
