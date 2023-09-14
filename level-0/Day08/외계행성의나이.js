/**
 * 문제 설명
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

제한사항
age는 자연수입니다.
age ≤ 1,000
PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
입출력 예
age	result
23	"cd"
51	"fb"
100	"baa"
입출력 예 설명
입출력 예 #1

age가 23이므로 "cd"를 return합니다.
입출력 예 #2

age가 51이므로 "fb"를 return합니다.
입출력 예 #3

age가 100이므로 "baa"를 return합니다.
 */

function solution(age) {
  var answer = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };
  let newAge = String(age);
  return newAge
    .split("")
    .map((e) => answer[e])
    .join("");
}
/**
 * 먼저 변수를 생성해 객체를 만들어 줍니다.

객체 안에는 숫자로 이루어진 key와 알파벳으로 이루어진 value를 담습니다.

그 후 다른 변수를 생성해 숫자 타입인 매개변수 age를 문자 타입으로 바꿔줍니다.

이제 문자로 이루어진 newAge를 split 함수를 사용해 쪼개 배열로 만들어 주고 map 함수를 통해 해당 배열을 순회합니다. 

map 함수로 순회하면서 만들어놓은 answer 객체에 해당 아이템을 대입하면서 key 값으로 value를 찾게끔

예시) e = [’2’, ‘3’] 이라면 2와 3이 키 값이므로 이를 answer안에 대입하게 되면 2와 3의 value 값인 ‘c’와 ‘d’가 출력됩니다. 

이제 join 함수를 사용해 문자 배열을 붙여 문자열로 만들어줍니다.
 */
