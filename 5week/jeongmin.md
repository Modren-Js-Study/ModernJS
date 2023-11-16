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

## 2. 아래 코드를 실행 시 어떤 결과값이 나올까요?

```js
  let obj = {};
  Object.defineProperty(obj, 'property1', {
      value: 58,
      writable: false
  });
  obj.property1 = 22;
  console.log(obj.property1);

```

<br/>
<br/>

## 3. 아래 상황을 보고 알맞은 메서드를 말해주세요.

1. 객체에 **어떤 프로퍼티 어트리뷰트가 있는지 확인**하고 싶을 때 사용하는 메서드는?

2. 객체를 읽고, 쓰기만 가능한 상태로 변경하고 싶을 때 사용하는 메서드는?
