// 1. 객체를 복사할 때, 어떻게 참조에 의한 전달을 피할 수 있을까요?
//2.아래 코드에서 console.log(result);를 실행했을 때, 화면에 어떤 값을 출력하나요?
let a = 5;

function foo(b) {
  let a = 10;
  return a + b;
}

let result = foo(3);

console.log(result); // 출력: ?

//--------------------------------------------------------------
// 3. 다음 중 원시 데이터 유형(Primitive data types)은 무엇인가요?
// a. 객체
// b. 문자열
// c. 배열
// d. 함수

// 4. 다음 코드를 실행한 후 originalArray와 referenceArray의 내용이 어떻게 되는지 설명해보세요.
let originalArray = [1, 2, 3];
let referenceArray = originalArray;
referenceArray.push(4);
originalArray = [];

// 5. 다음 코드에서 obj1과 obj2가 동일한 객체를 참조하도록 만들어보세요.
let obj1 = { value: 10 };
let obj2; // obj2를 obj1과 동일한 객체를 참조하도록 만들어야 함