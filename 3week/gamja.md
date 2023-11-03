1. 객체를 복사할 때, 어떻게 참조에 의한 전달을 피할 수 있을까요?

>>>>> 얕은 복사 또는 깊은 복사를 사용하여 참조에 의한 전달을 피할 수 있습니다.
- 얕은 복사(shallow copy)
: 객체의 상위 수준만 복사하고 하위 객체(내부 객체)는 참조를 유지
- 깊은 복사(deep copy)
: 객체와 모든 하위 객체를 복사하여 완전한 복제 만듦

==========================================

2. 아래 코드에서 console.log(result);를 실행했을 때, 화면에 어떤 값을 출력하나요?
```
let a = 5;

function foo(b) {
  let a = 10;
  return a + b;
}

let result = foo(3);

console.log(result); // 출력: ?
```

>>>>> 13
- 함수 foo 내부의 a와 외부의 a는 서로 다른 변수!
- 함수 내부에 선언된 a는 지역 변수로 함수 내에서만 유효하며, 외부의 a와는 독립적!
- foo 함수가 호출될 때, b 매개변수는 값 3으로 초기화!
- 이 값은 함수 호출 시 전달된 인자(인수)로 결정!
- result 는 foo(3)의 반환값. 따라서 결과는 13
  
==========================================

3. 다음 중 원시 데이터 유형(Primitive data types)은 무엇인가요?
a. 객체
b. 문자열
c. 배열
d. 함수

>>>>> b. 문자열
- 원시 데이터 유형은 숫자, 문자열, 불리언, null, undefined, Symbol 등이 포함
  
==========================================

4. 다음 코드를 실행한 후 originalArray와 referenceArray의 내용이 어떻게 되는지 설명해보세요.
```
let originalArray = [1, 2, 3];
let referenceArray = originalArray;
referenceArray.push(4);
originalArray = [];
```

>>>>> originalArray -> 빈 배열, referenceArray -> [1, 2, 3, 4] 배열 참조
- originalArray를 referenceArray에 할당한 후 referenceArray를 수정하면 originalArray도 같은 배열을 참조
- 그러나 originalArray를 다시 빈 배열로 초기화해도 referenceArray는 기존의 배열을 계속 참조

==========================================

5. 다음 코드에서 obj1과 obj2가 동일한 객체를 참조하도록 만들어보세요.
let obj1 = { value: 10 };
let obj2; // obj2를 obj1과 동일한 객체를 참조하도록 만들어야 함

>>>>> obj2 = obj1;
- obj2에 obj1을 할당하면 두 변수가 동일한 객체를 참조