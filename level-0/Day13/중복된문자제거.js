/**
 * 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string ≤ 110
my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
대문자와 소문자를 구분합니다.
공백(" ")도 하나의 문자로 구분합니다.
중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
입출력 예
my_string	result
"people"	"peol"
"We are the world"	"We arthwold"
입출력 예 설명
입출력 예 #1

"people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
입출력 예 #2

"We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.
 */
function solution(my_string) {
  var answer = my_string
    .split("")
    .filter((e, i) => my_string.indexOf(e) === i)
    .join("");
  return answer;
}
/**
 * ## 

1. **`my_string`** 문자열을 **`split('')`** 메서드를 사용하여 각 문자로 분해합니다. 이렇게 하면 문자열이 배열로 변환됩니다. 예를 들어, "hello" 문자열은 **`["h", "e", "l", "l", "o"]`**로 분해됩니다.
2. **`filter`** 함수를 사용하여 배열의 각 요소를 순회합니다. **`filter`** 함수의 콜백 함수는 두 개의 매개변수를 가집니다. 첫 번째 매개변수 **`e`**는 배열 요소 자체이고, 두 번째 매개변수 **`i`**는 해당 요소의 인덱스입니다.
3. 콜백 함수 내에서 **`my_string.indexOf(e)`**는 현재 요소 **`e`**의 첫 번째 등장 위치(인덱스)를 찾습니다. 이때 **`indexOf`** 메서드는 문자열에서 해당 문자나 부분 문자열의 첫 번째 등장 위치를 반환합니다.
4. **`my_string.indexOf(e) === i`** 조건은 현재 문자 **`e`**의 첫 번째 등장 위치가 현재 인덱스 **`i`**와 일치하는지 확인합니다. 이것은 중복된 문자가 아닌 문자를 필터링하기 위한 조건입니다.
5. 조건을 만족하는 문자들만 남게 되고, 그 결과로 중복 문자가 제거된 배열이 생성됩니다.
6. 마지막으로 **`join('')`** 메서드를 사용하여 중복 문자가 제거된 배열을 다시 하나의 문자열로 결합합니다.
 */
