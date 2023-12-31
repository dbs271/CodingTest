/**
 * ### **문제 설명**

정수 `num1`과 `num2`가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

---

### 제한사항

- 0 ≤ `num1` ≤ 10,000
- 0 ≤ `num2` ≤ 10,000

---

### 입출력 예

| num1 | num2 | result |
| --- | --- | --- |
| 2 | 3 | -1 |
| 11 | 11 | 1 |
| 7 | 99 | -1 |

---

### 입출력 예 설명

입출력 예 설명 #1

- `num1`이 2이고 `num2`가 3이므로 다릅니다. 따라서 -1을 return합니다.

입출력 예 설명 #2

- `num1`이 11이고 `num2`가 11이므로 같습니다. 따라서 1을 return합니다.

입출력 예 설명 #3

- `num1`이 7이고 `num2`가 99이므로 다릅니다. 따라서 -1을 return합니다.
 */

function solution(num1, num2) {
  if (num1 !== num2) {
    return -1;
  }
  return 1;
}

// if문을 사용해서 num1과 num2를 비교하여 두 매개변수가 다르다면 -1을 리턴한다. 그 외의 경우는 두 매개변수가 같다는 경우밖에 있지 않기 때문에 1을 리턴해주면 된다.
