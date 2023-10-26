### 1. 위 코드를 실행 시 console.log의 결과값은 무엇일까요?

```jsx
let c = 0;
while (c < 3) {
  c++;
}
console.log(c);
```

<details>
<summary>풀이 답안</summary>

-  c++는 후위 연산자이지만, 실제로 c의 값이 증가하는 것은 while 문의 비교 조건을 체크하기 전입니다. 
- 즉, c가 3보다 작을 동안 while문이 계속 실행되고, c가 3이 되면 while문은 종료됩니다.

- 따라서, console.log(c)의 결과는 3이 됩니다. 
```jsx

  let c = 0;
  while (c < 3) {
    c++;
  }
  console.log(c); // 3

  ```
</details>

<br/>
<br/>
<br/>

<details>
<summary>추가문제</summary>

### 아래 코드를 실행 시 console.log의 결과값은 무엇일까요?
```jsx

    let d = 3;

    while (d) {
      console.log(d--);
    }

  ```
</details>

<br/>
<br/>

<details>
<summary>추가문제 정답</summary>

- d--는 후위 감소 연산자로, 연산이 먼저 이루어진 후에 1이 감소합니다.

- 그래서 이 경우, while (d) 조건에서 d가 0이 아니라면 console.log(d--)를 실행하게 됩니다. 이 때, console.log는 d의 현재 값을 출력한 후, d--에 의해 d의 값이 1 감소하게 됩니다.

- 따라서 콘솔에는 3, 2, 1 순서대로 출력되고, d가 0이 되면 while문은 종료됩니다.

```jsx

    let d = 3;

    while (d) {
      console.log(d--);
    }

    // 3
    // 2
    // 1

  ```
</details>


<br/>    
<br/>    

### 2. 위 코드를 실행 시  console.log의 결과값은 무엇일까요?

```jsx

let b = '2';

switch (b) {
  case 1:
    console.log('One');
    break;
  case 2:
    console.log('Two');
    break;
  default:
    console.log('Default');
}

```

<details>
<summary>풀이 답안</summary>

- JavaScript의 switch문은 엄격한 비교(===)를 사용하기 때문에, 타입이 다른 경우 일치하지 않습니다. 따라서 문자열 '2'와 숫자 2는 일치하지 않아 default가 출력됩니다. 
```jsx

  let b = '2';

  switch (b) {
    case 1:
      console.log('One');
      break;
    case 2:
      console.log('Two');
      break;
    default:
      console.log('Default');
  }

  // Default가 출력됩니다.

  ```
</details>