/**
 * 문제 설명
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
중복된 원소는 없습니다.
1 ≤ emergency의 길이 ≤ 10
1 ≤ emergency의 원소 ≤ 100
입출력 예
emergency	result
[3, 76, 24]	[3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]	[7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]	[2, 4, 3, 5, 1]
입출력 예 설명
입출력 예 #1

emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
입출력 예 #2

emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
입출력 예 #3

emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.
 */

function solution(emergency) {
  var answer = [...emergency].sort((a, b) => b - a);
  return emergency.map((i) => answer.indexOf(i) + 1);
}

/**
 * 변수에 매개변수 emergency를 스프레드 연산자를 사용해 배열 복사 해줍니다.

그리고 이것을 sort 함수를 사용해서 내림차순으로 정렬합니다.

ex) [3, 6, 2] ⇒ [6, 3, 2]

그런 다음 원본 배열(emergency)를 map 함수를 사용하여 순회합니다.

이때 내림차순으로 정렬된 복사본 배열에 인덱스 번호를 넣고 숫자 1을 더합니다.

그럼 원본의 아이템과 복사본의 아이템을 비교하여 인덱스 번호가 설정됩니다.

(인덱스는 0부터 시작하기 때문에 1을 더해줍니다.)

예시) emergency = [3, 6, 2], answer = [6, 3, 2]

answer.indexOf(i) + 1 = [1, 2, 3]

= emergency = [2, 1, 3]
 */
