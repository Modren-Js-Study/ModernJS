## 1. 아래 코드를 실행 시 console.log의 결과값은 각각 무엇일까요?

```jsx
// --------------------------- 1-1번 ---------------------------

var x = 10;
function foo() {
var x = 20;
if (true) {
var x = 30;
}
console.log(x);
}


foo();
console.log(x);

// --------------------------- 1-2번 ---------------------------

let y = 10;
function bar() {
  let y = 20;
  if (true) {
    let y = 30;
  }
  console.log(y);
}
bar();
console.log(y);


// --------------------------- 1-3번 ---------------------------
const z = 10;
function baz() {
  const z = 20;
  if (true) {
    const z = 30;
  }
  console.log(z);
}
baz();
console.log(z);
```

## 2. 동적스코프(Dynamic scope)와 렉시컬 스코프(lexical scope)란 무엇인가요? <br/> (자바스크립트에서는 어떤것을 사용하는지도 알려주세요.)