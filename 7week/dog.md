1. 실행 순서는?

```jsx
console.log('Global Context'); // (호출 순서: 1)

// outer 함수 정의
function outer() {
  console.log('Outer Function'); // (호출 순서: 2)
  const variable1 = 'I am from outer!';

  // middle 함수 정의
  function middle() {
    console.log('Middle Function'); // (호출 순서: 3)
    const variable2 = 'I am from middle!';

    // inner 함수 정의
    function inner() {
      console.log('Inner Function'); // (호출 순서: 4)
      const variable3 = 'I am from inner!';

      // setTimeout 내부의 delayed 함수 실행
      setTimeout(function delayed() {
        console.log('Delayed Function'); // (호출 순서: 7)
        console.log(variable1); // (호출 순서: 8)
        console.log(variable2); // (호출 순서: 9)
        console.log(variable3); // (호출 순서: 10)
      }, 1000);
    }

    inner(); // inner 함수 호출 (호출 순서: 3)
  }

  middle(); // middle 함수 호출 (호출 순서: 2)
}

outer(); // outer 함수 호출 (호출 순서: 1)
```
1. 해설
전역 코드 평가 과정에서 outer함수가 호이스팅 됩니다. 함수 선언문은 함수 자체가 호이스팅되기 떄문에 함수 자체가 최선두로 끌어올라갑니다. 
전역 코드 평가 과정이 끝나면 console.log 함수를 호출하고 console.log 함수에 대한 함수 평가 과정이 실행되고
log 메서드를 실행한 뒤 종료되면 outer함수 호출이 되면서
outer함수에 대한 함수 코드 평가 과정이 실행됩니다. variable1 변수가 최선두로 끌어올라가고 자바스크립트 엔진에 선언을 알립니다
이때 초기화되지 않고 TDZ존이 발생합니다 
(TDZ : 소스코드 평가과정이 실행될 때 까지 접근할 수 없는 영역을 Temporal Dead Zone 이라고 한다.)
함수 코드 실행과정에서 함수내에 할당문이 시작되고 이떄 variable1 변수가 undefined로 초기화되고 할당받습니다.
그 후 middle()함수를 호출해 middle함수에 제어권이 이동합니다. 그렇게 inner함수까지 과정을 반복하고 inner함수가 실행됨과 동시에
setTimeOut 함수의 함수 실행 컨텍스트가 생성되고 콜 스택에 푸쉬되어 현재 실행중인 실행 컨텍스트가 됩니다.
setTimeOut 함수가 실행되면 콜백 함수를 호출 스케일링하고 종료되어 콜 스택에서 팝됩니다.
 이때 타이머설정, 타이머가 완료되면 태스크 큐에 푸쉬하는데 이것들은 브라우저에 위임됩니다.
이후 타이머가 만료되면 콜백 함수를 태스크 큐에 푸쉬하고 대기하게 됩니다 이 또한 브라우저가 역할을 수행합니다.
그 후 console.log()가 호출되고, variable3 변수가 할당을 받은 뒤 FILO로 실행 컨텍스트가 종료되고
이벤트 루프에 의해 콜 스택이 비어있음을 감지하면 태스크 큐에서 대기 중인 콜백함수 delayed()가 호출됩니다
delayed 함수 실행 컨텍스트를 생성하고 현재 실행 중인 실행 컨텍스트가 됩니다 이후 delayed함수가 종료되어 콜 스택에서 팝됩니다.

---

정리하다보니 좀 더 자세히 기제하면 좋을것 같아서 기재합니다.
{
함수 실행컨텍스트, 즉 실행되는 함수 내부의 환경을 통틀어 Lexical Environment라고 부르고, 
Lexical Environment는 각 Environment Record(환경 레코드)를 참조하는 형태입니다.

// const 환경 레코드 = (환경 레코드는 두 가지 유형으로 나뉩니다). => { 
    Declarative Environment Record: 란 실제 변수와, 실제 함수 선언을 포함하며, 실제 값을 저장하는 구조입니다.
    Object Environment Record: 객체의 프로퍼티를 참조하는데 사용되며, 프로퍼티의 값을 실제로 저장하지는 않습니다.
    return {
       Declarative Environment Record,
      Object Environment Record
    }
} 

상위 컨텍스트의 Lexical Environment에 대한 참조는 OuterEnvironment Reference가 담당합니다.
스코프 체인이 가능한 이유는 Lexical Environment의 두 번째 수집 자료구조인 OuterEnvironment Reference가 담당합니다 OuterEnvironment Reference를 통해
상위 Lexical Environment에 연결됩니다. 이 연결된 구조를 통해 함수는 자신의 스코프 및 외부 함수의 스코프에 있는 변수에 접근할 수 있습니다.
Outer Lexical Environment는 Lexical Environment의 외부 환경을 나타내며, 이는 함수가 중첩된 구조에서 외부 함수의 Lexical Environment를 가리킵니다.

자세한 설명을 위해 세분화 했습니다.
};
<img width="1331" alt="스크린샷 2023-11-30 오후 11 38 30" src="https://github.com/Modren-Js-Study/ModernJS/assets/135151859/0a87f81e-5cc9-484e-b093-6aebe4e1c144">






```jsx

function outer(x) {
 return function middle(y) {
  return function inner(z){
   return function deepest(w){
    return function final(v){
     return x * y + z - w * v;
    };
   };
  };
 };
}
const closureExample = outer(2)(3)(4)(1);
console.log(closureExample(2)); // 출력: ?
```

2. 해설

"outer 함수의 인수 x는 outer 함수 안에서 유효한 스코프를 갖는 지역 변수입니다."
자바스크립트는 렉시컬 스코프를 따르기 때문에 함수가 어디서 호출되어 외부 렉시컬 환경을 참조하지 않습니다.
참조 값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경에 의해 결정됩니다.

각 함수가 참조하는 외부 outerEnvironmentReference는 [[Environment]] 내부슬롯에 참조를 저장합니다. 


그럼 각 내부 함수들은 외부 함수들의 환경을 기억합니다. outerEnvironment를 타고 outer함수까지 체인을 통해 값을 참조할 수 있습니다.
const closureExample = outer(2)(3)(4)(1);
closureExample가 반환받는 함수는 final함수 이므로 final함수는 deepest 함수를 참조하는 클로저입니다.outerEnvironment를 타고 
outer 함수까지 참조할 수 있다고 했으니 결과적으론 outer함수의 lexicalEnvironment를 기억하는 함수가됩니다. 
그 함수를 closureExample가 반환받아 closureExample(2)를 호출하면 x, y, z, w, v 값에 각각 2, 3, 4, 1, 2가 대응되어 최종적으로 
2 * 3 + 4 - 1 * 2 를 계산한 결과인 8이 반환됩니다.

