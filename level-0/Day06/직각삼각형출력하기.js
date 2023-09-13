/**
 * ### **문제 설명**

"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

---

### 제한사항

- 1 ≤ `n` ≤ 10

---

### 입출력 예

입력 #1

`3`

출력 #1

- `**
***`

### 입출력 예 설명

입출력 예 #1

- n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
});

/**
 * **readline 모듈은 잘 몰라서 검색해보고 최대한 이해한대로 풀이를 적어내봤다.**

1. **`input`** 배열을 선언하고, 사용자의 입력 값을 저장하기 위해 준비합니다.

```jsx
let input = [];
```

1. **`rl.on('line', ...)`**을 사용하여 사용자로부터 입력을 받습니다. 이 부분은 사용자가 엔터 키를 누를 때마다 호출되며, 입력 값을 **`input`** 배열에 공백을 기준으로 나누어 저장합니다.

```jsx
rl.on('line', function (line) {
    input = line.split(' ');
})
```

1. **`rl.on('close', ...)`**을 사용하여 사용자 입력이 종료되면 실행될 코드를 설정합니다. 이 부분에서는 입력값을 가지고 직각 이등변 삼각형을 그리는 로직을 구현합니다.

```jsx
.on('close', function () {
    const n = Number(input[0]); // 사용자 입력의 첫 번째 값, 즉 n을 숫자로 변환하여 변수에 저장합니다.

    // 높이가 n인 직각 이등변 삼각형을 그리는 반복문을 실행합니다.
    for (let i = 1; i <= n; i++) {
        let row = ''; // 현재 줄에 출력할 문자열을 담는 변수를 선언합니다.

        // 현재 줄에는 i개의 '*'을 추가합니다.
        for (let j = 1; j <= i; j++) {
            row += '*';
        }

        // 현재 줄의 문자열을 출력합니다.
        console.log(row);
    }
});
```

위 코드의 핵심 로직은 입력으로 받은 n에 따라 높이가 n인 직각 이등변 삼각형을 출력하는 부분입니다. 
**`for`** 반복문을 사용하여 각 줄마다 **`*`**을 하나씩 더하여 현재 줄의 문자열을 구성하고, 
이를 **`console.log`**를 사용하여 출력합니다. 이렇게 하면 입력된 n 값에 따라 직각 이등변 삼각형이 출력됩니다.
 */
