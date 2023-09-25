/**
 * 문제 설명
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

제한사항
연산자는 +, -만 존재합니다.
문자열의 시작과 끝에는 공백이 없습니다.
0으로 시작하는 숫자는 주어지지 않습니다.
잘못된 수식은 주어지지 않습니다.
5 ≤ my_string의 길이 ≤ 100
my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
my_string에는 연산자가 적어도 하나 포함되어 있습니다.
return type 은 정수형입니다.
my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
입출력 예
my_string	result
"3 + 4"	7
입출력 예 설명
입출력 예 #1

3 + 4 = 7을 return 합니다.
 */

function solution(my_string) {
  let arr = my_string.split(" ");
  let cal = +arr[0];
  for (let i = 1; i < my_string.length; i++) {
    if (arr[i] === "+") {
      cal += +arr[i + 1];
    } else if (arr[i] === "-") {
      cal -= +arr[i + 1];
    }
  }
  return cal;
}

/**
 * ## 

split 메서드로 공백을 기준으로 문자열을 배열로 만듭니다.

변수 cal 배열의 0번째 인덱스 요소를 담습니다. 이때 앞에 + 기호를 붙여 숫자 타입으로 바꿔줍니다.

for 문을 사용해 매개변수의 길이만큼 반복합니다.

만약 `arr`의 `i`번째 요소가 `‘+’` 일 경우 `cal` 변수에 `arr`의 `i`번째 인덱스에 1을 더했을 때 존재하는 인덱스 요소를 더해줍니다. 이때도 앞에 + 기호를 붙여 숫자 타입으로 바꿔줍니다.

마이너스일 경우 `‘-’`를 찾아 `cal` 변수에 빼주면 됩니다.

예시) `i`가 `‘+’` 혹은 `‘-’` 일 경우 해당 인덱스 번호에 1을 더한 인덱스 번호의 요소를 `cal` 변수의 값과 더해주면 됩니다. `i = 1` 일때 `‘+’` 라면 `arr[1+1]` 즉, `arr[2]` 의 요소를 `cal = arr[0]` 요소와 더하거나 뺍니다.
 */
