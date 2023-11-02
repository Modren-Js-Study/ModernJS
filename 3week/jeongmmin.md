## 1. 아래 코드를 실행 시 console.log의 결과값은 무엇일까요?

```jsx

let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b);  // 출력 결과는?
console.log(a === b); // 출력 결과는?

```

<br/>

<details>
<summary>정답</summary>

```jsx

let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a == b);  // false
console.log(a === b); // false


```

<br/>
두 경우 모두 false를 출력합니다.

이유는 자바스크립트에서 배열은 객체로 취급되기 때문입니다. <br/>
a와 b 모두 배열이지만, 각각 다른 메모리 주소에 저장됩니다. <br/>
따라서 a와 b가 가리키는 메모리 주소는 서로 다르고, ==나 === 연산자를 사용해서 비교하면 두 배열은 서로 다르다고 판단됩니다.

즉, a와 b가 같은 값을 가지고 있지만, **실제로는 서로 다른 객체(배열)이므로** 두 경우 모두 false가 출력되는 것입니다.
</details>


<br/>
<br/>
<br/>


---

<br/>
<details>
<summary>추가문제</summary>

```jsx

let a = [1, 2, 3];
let b = a;

console.log(a == b);  // 출력 결과는?
console.log(a === b); // 출력 결과는?

a[0] = 7;

console.log(a) // 출력 결과는?
console.log(b) // 출력 결과는?


```
</details>


<br/>
<br/>

<details>
<summary>추가문제 정답</summary>

```jsx

let a = [1, 2, 3];
let b = a;

console.log(a == b);  // true
console.log(a === b); // true

a[0] = 7;

console.log(a) // [7, 2, 3]
console.log(b) // [7, 2, 3]


```

<br/>
두 경우 모두 true를 출력합니다.

객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달되기 떄문입니다.
이를 참조에 의한 전달이라고 합니다.

두 개의 식별자가 하나의 객체를 공유하기 때문에 원본 또는 사본 중 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받게 됩니다.

</details>


<br/>
<br/>

---

## 2. 아래 코드를 실행 시 console.log의 결과값은 무엇일까요?

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

<details>
<summary>정답</summary>

```jsx

let obj = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};

let func = obj.sayHello;
func();

// Hello,

```

<br/>
자바스크립트에서 함수의 this는 기본적으로 함수를 호출하는 주체, 즉 함수가 어떻게 호출되었는지에 따라 달라지기 때문입니다. <br/>
위의 경우, func()는 obj 객체와 연관 없이 일반 함수로서 호출되었기 때문에 this는 전역 객체를 가리키게 됩니다. <br/>

브라우저 환경에서 전역 객체는 window이며, Node.js 환경에서 전역 객체는 global입니다.<br/> 그런데 위의 코드에서 this.name을 찾을 수 없기 때문에 undefined가 반환되고, 결과적으로 콘솔에는 Hello, 만 출력되게 됩니다.

</details>