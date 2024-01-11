## 1. 다음 코드의 결과와 실행과정을 설명해주세요.

```jsx
// [1-1]
Promise.all([Promise.resolve('First resolution'), Promise.reject('First rejection')])
  .then(values => console.log(values))
  .catch(error => console.log(error));

//  [1-2]
Promise.allSettled([Promise.resolve('First resolution'), Promise.reject('First rejection')])
  .then(results => console.log(results));

```

<br/>
<br/>
<br/>


## 2. o,x 퀴즈
(1) 모든 자바스크립트 파일은 기본적으로 모듈로 동작한다.

(2) `export` 키워드로 여러 개의 값을 내보낼 수 있다.

(3) 모듈 내에서 `let` 또는 `const`로 선언된 변수는 전역 `window` 객체의 프로퍼티가 됩니다.

(4) 모듈에서 `export default`를 사용하면 다른 모듈에서 `{}` 기호를 사용하여 로드할 수 있다.