### 1. 아래 코드를 실행 시 console.log의 결과값은 무엇일까요?

```jsx

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b);  // 출력 결과는?
console.log(a === b); // 출력 결과는?

```

<details>
<summary>추가문제</summary>

```jsx

let a = [1, 2, 3];
let b = a;

console.log(a == b);  // 출력 결과는?
console.log(a === b); // 출력 결과는?

a[0] = 7;

console.log(a)
console.log(b)


```
</details>


<br/>
<br/>

### 아래 코드를 실행 시 console.log의 결과값은 무엇일까요?

```jsx

let obj = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};

let func = obj.sayHello;
func();


```
