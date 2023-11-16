## 1. 아래 코드를 생성자 함수 형태로 변환해주세요.

```jsx
const square1 = {
  w: 5,
  h: 10,
  getArea() {
    return this.w * this.h;
  },
};

console.log(square1.getArea());

const square2 = {
  w: 4,
  h: 8,
  getArea() {
    return this.w * this.h;
  },
};

console.log(square2.getArea());
```

<br/>
<br/>

<details>
<summary>정답</summary>

```js
function CreateSquare(w, h) {
  this.w = w;
  this.h = h;

  this.getArea = () => {
    return this.w * this.h;
  };
}

const sq1 = CreateSquare(5, 10);
const sq2 = CreateSquare(4, 8);

console.log(sq1.getArea());
console.log(sq2.getArea());
```

### [생성자함수의 인스턴스 생성과정]
1. **인스턴스 생성과 this 바인딩**
  -  암묵적으로 빈 객체 생성 ⇒ 이 빈객체 = 생성자 함수가 생성한 인스턴스
  - 이 빈 객체는  this에 바인딩 된다.
2. **인스턴스 초기화**
  - this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가 ⇒ 생성자 함수가 인수로 전달 받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.
3. **인스턴스 반환**
  - 생성자 함수 내부에서 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.


(➕ this와 화살표 함수에 대해 더 공부해보기)

</details>

<br/>
<br/>

## 2. 아래 코드를 실행 시 어떤 결과값이 나올까요?

```js
let obj = {};
Object.defineProperty(obj, 'property1', {
  value: 58,
  writable: false,
});
obj.property1 = 22;
console.log(obj.property1);
```

<br/>
<br/>

<details>
<summary>정답</summary>

```
58 입니다.
writable: false 이기 때문에 obj의 값을 수정할 수 없습니다.
따라서 obj의 값이 변경되지 않고, 그대로 유지됩니다.
```
</details>

<br/>
<br/>

## 3. 아래 상황을 보고 알맞은 메서드를 말해주세요.

1. 객체에 **어떤 프로퍼티 어트리뷰트가 있는지 확인**하고 싶을 때 사용하는 메서드는?

2. 객체를 읽고, 쓰기만 가능한 상태로 변경하고 싶을 때 사용하는 메서드는?

<br/>
<br/>

<details>
<summary>정답</summary>

  1번
  
  ```jsx
  // 하나의 프로퍼티의 정보 제공 
  obj.getOwnPropertyDescriptor(객체이름, 프로퍼티이름) 

  // 모든 프로퍼티의 정보 제공 
  obj.getOwnPropertyDescriptors(객체이름) 
  ```
  
  2번
  
  ```jsx
  obj.seal(객체이름)

  // Plus
  obj.freeze(객체이름) // ⇒ 읽기만 가능
  obj.preventExtensions // ⇒ 추가만 불가능하고 모두 가능
  ```
</details>