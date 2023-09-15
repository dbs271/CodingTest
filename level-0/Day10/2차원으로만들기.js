/**
 * 문제 설명
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
제한사항
num_list의 길이는 n의 배 수개입니다.
0 ≤ num_list의 길이 ≤ 150
2 ≤ n < num_list의 길이
입출력 예
num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
[100, 95, 2, 4, 5, 6, 18, 33, 948]	3	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
입출력 예 설명
입출력 예 #1

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 2 * 4 배열로 변경한 [[1, 2], [3, 4], [5, 6], [7, 8]] 을 return합니다.
입출력 예 #2

num_list가 [100, 95, 2, 4, 5, 6, 18, 33, 948] 로 길이가 9이고 n이 3이므로 3 * 3 배열로 변경한 [[100, 95, 2], [4, 5, 6], [18, 33, 948]] 을 return합니다.
 */

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}

/**
 * for문에서는 num_list 배열 길이에서 n을 나눈 몫만큼 반복되게 해주고,

slice 배열 내장 함수를 이용해서 answer 변수에 값을 담을 수 있도록 해줬다.

slice 배열 내장 함수는 index를 통해서 배열을 자르고 자른 배열을 return 해줄 수 있다.

이것은 첫번째 인자로 자르기 시작하는 index를 받고, 두번째 인자로 어디 index 전까지 자를지 해당 index를 넣어주면 된다.

예를 들어서, [1, 2, 3, 4].slice(0, 2) 의 결과 값으로는 [1, 2] 즉, 0 ~ 1번 index까지 자르게 되는 것이다.

코드에서 slice 내장 함수의 인자에 (i * n, i * n + n)을 넣어 줬는데, n을 2로 예시를 들면

i는 0부터 시작으로 (0 * 2, 0 * 2 + 2) = (0, 2) 가 되고,

i가 1이 되면 (1 * 2, 1 * 2 + 2) = (2, 4) 가 되면서 조건에 맞게 2개씩 묶은 2차원 배열을 만들 수 있게 되는 것이다.
 */
