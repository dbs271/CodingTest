/**
 * 문제 설명
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

제한사항
0 < rsp의 길이 ≤ 100
rsp와 길이가 같은 문자열을 return 합니다.
rsp는 숫자 0, 2, 5로 이루어져 있습니다.
입출력 예
rsp	result
"2"	"0"
"205"	"052"
입출력 예 설명
입출력 예 #1

"2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.
입출력 예 #2

"205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.
 */

function solution(rsp) {
  return rsp
    .split("")
    .map((e) => {
      switch (e) {
        case "2":
          return "0";
        case "0":
          return "5";
        case "5":
          return "2";
      }
    })
    .join("");
}

/**
 * rsp.split(''): 주어진 문자열 rsp를 빈 문자열('')을 구분자로 사용하여 각 문자로 분할합니다. 이렇게 하면 문자열의 각 문자가 배열의 원소로 들어가게 됩니다. 예를 들어, "205"라는 문자열이 주어지면 ['2', '0', '5']와 같은 배열이 생성됩니다.

.map(e => {...}): map 메소드는 배열의 각 요소에 대해 주어진 함수를 호출하고 그 결과로 새로운 배열을 생성합니다. 여기서는 각 문자(e)를 처리하기 위한 함수를 정의합니다.

switch(e) { ... }: switch 문을 사용하여 문자 e를 기준으로 변환 규칙을 적용합니다. 각 문자에 따라 다른 처리를 수행합니다.

case 문: switch 문 안에서 각 문자에 대한 변환 규칙을 정의합니다. 코드는 다음과 같이 작동합니다:

case '2': return '0': 문자 '2'를 문자 '0'으로 변환합니다.
case '0': return '5': 문자 '0'을 문자 '5'로 변환합니다.
case '5': return '2': 문자 '5'를 문자 '2'로 변환합니다.
기타 경우: switch 문에서 처리하지 않은 문자는 그대로 반환합니다.
.join(''): map 함수에서 반환된 변환된 문자들로 이루어진 배열을 다시 문자열로 합칩니다. 각 변환된 문자를 연결하여 최종 결과 문자열을 생성합니다.

따라서, 주어진 문자열 rsp 내의 각 문자를 위의 규칙에 따라 변환한 후, 변환된 문자들을 다시 하나의 문자열로 합쳐서 반환하는 함수가 됩니다. 예를 들어, "205"라는 문자열을 입력으로 주면 함수는 "052"라는 문자열을 반환합니다.







 */
