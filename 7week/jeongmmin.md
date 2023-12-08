## 1. 아래 코드를 보고 물음에 답해주세요

```jsx
var x = 1;
const y = 2;

function foo (a) {
  var x = 3;
  const y = 4;

  function bar (b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10); // ← 호출 직전
}

foo(20);

```

위의 코드 실행과정에서 console.log를 실행할 때 일어나는 일을 실행 컨텍스트와 관련시켜서 설명해주세요~!

## 2. 다음 코드의 실행결과는 무엇일까요?

```jsx
let funcs = [];

for (let i = 0; i < 5; i++) {
    funcs[i] = function() {
        return i;
    }
}

console.log(funcs[0]());  
console.log(funcs[1]());  
console.log(funcs[2]());  

```