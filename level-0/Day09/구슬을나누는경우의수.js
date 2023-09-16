/**
 * ### **문제 설명**

머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 `balls`와 친구들에게 나누어 줄 구슬 개수 `share`이 매개변수로 주어질 때, `balls`개의 구슬 중 `share`개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

---

### 제한사항

- 1 ≤ `balls` ≤ 30
- 1 ≤ `share` ≤ 30
- 구슬을 고르는 순서는 고려하지 않습니다.
- `share` ≤ `balls`

---

### 입출력 예

| balls | share | result |
| --- | --- | --- |
| 3 | 2 | 3 |
| 5 | 3 | 10 |

---

### 입출력 예 설명

입출력 예 #1

- 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
    
    !https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/668adf7a-38b1-4112-bbc5-4fab429168c9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.15.55.png
    

입출력 예 #2

- 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.

---

### Hint

- 서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다.
    
    !https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/54c8b2b9-f88c-4a09-8956-7560ff7ea918/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.37.53.png
    

---

※ 공지 - 2022년 10월 11일 제한 사항 및 테스트케이스가 수정되었습니다.
 */

function solution(balls, share) {
  // 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
// 팩토리얼을 구하는 함수
function factorial(num) {
  let returnFactorial = BigInt(1);
  for (let i = num; i >= 2; i--) {
    returnFactorial *= BigInt(i);
  }
  return returnFactorial;
}
