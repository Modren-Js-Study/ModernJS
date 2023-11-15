<span style="color:tomato">1. 문제</span>   
배열, 객체를 const로 선언했는데 요소나 속성을 추가할 수 있는 이유는?

<span style="color:tomato">해설 </span>

Const 변수에 할당된 값은 바뀌지 않지만, 배열/객체가 변수에 할당될 때에는 배열/객체의 요소(값) 자체가 아니라 주소(이 값은 불변, 상수)가 할당되기 때문입니다

<span style="color:tomato">2. 문제</span>  
const outer = () => {  
 var a = 1;  
 var inner = () => {  
 return a++;  
 };  
 return inner;
};

a 를 증가시켜주세요.


<span style="color:tomato">해설 </span>

 외부함수 outer 함수의 내부 중첩함수 inner함수가 
 외부함수 outer의 
 
변수 a를 참조하는
 내부 함수가 외부 함수의
 
LexicalEnvironment를 참조하는 경우
 이런 현상을 '클로저'라고 한다.
 
1장 가비지컬렉터, 13장 렉시컬 환경만 알아도 어느정도 이해의 발판을 삼을 수 있다고 생각해서낸 문제입니다.

실행컨텍스트 내용을 배제해놓고 설명하기 좀 어려웠지만 문제의 의도는

함수 outer함수의 렉시컬 스코프는 지역변수 a, inner함수

inner함수의 렉시컬 스코프는 return a++; <-
변수를 참조할 때 자바스크립트 엔진은 스코프체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.

핵심은 외부 함수의 생명주기가 끝났을 때 

내부함수가 외부 함수를 참조할 수 있는 이유는 

가비지 컬렉터의 동작 방식 때문인데  
가비지 컬렉터는 어떤 '값'을 참조하는 변수가 하나라도 있다면

그 값은 수집 대상에 포함시키지 않는다.

![스크린샷 2023-11-16 오전 3.48.25.png](%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-11-16%20%EC%98%A4%EC%A0%84%203.48.25.png)

console.dir(a)를 찍어보면 scope가 나오는데 확인 해보면

2 <span style="color:skyblue">전역(global,window)객체를 참조, (제일 외부 환경) </span>

1 <span style="color:yellow">Script -> outer 함수의 스코프 / a: a 함수 내부에서 호출, 함수로 포함 </span> 

0 <span style="color:tomato">0: Closure 가장 안쪽에 있는 함수 스코프 즉, ++a를 return한 값이 포함   </span>

내부 함수 inner의 렉시컬 환경은

//(outer함수가 반환되는 inner 함수를 변수 a가 할당 받는다)

outer 함수의 변수 a를 참조하는 모든 스코프를 포함하고 있습니다.

이 렉시컬 환경에서 변수 a는 inner 함수가 반환되어 외부에서 호출될 때까지 유지됩니다.

따라서 inner 함수가 클로저로서 동작하면서 외부 함수인 outer의 변수에 접근할 수 있습니다

