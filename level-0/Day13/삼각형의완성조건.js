/**
 * 문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 3입니다.
1 ≤ sides의 원소 ≤ 1,000
입출력 예
sides	result
[1, 2, 3]	2
[3, 6, 2]	2
[199, 72, 222]	1
입출력 예 설명
입출력 예 #1

가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.
입출력 예 #2

가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.
입출력 예 #3

가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 완성할 수 있습니다. 따라서 1을 return합니다.
 */

function solution(sides) {
  var answer = sides.sort((a, b) => a - b);
  if (answer[0] + answer[1] > answer[2]) {
    return 1;
  } else return 2;
}

/**
 * `sort()` 메서드를 통해 배열 오름차순으로 변경하고, 변수 `answer`에 할당합니다.

`if 문`을 사용해 만약 `answer`의 첫 번째 요소 + 두 번째 요소가 세 번째 요소보다 클 경우 1을 리턴하고 작을 경우 2를 리턴합니다
 */
