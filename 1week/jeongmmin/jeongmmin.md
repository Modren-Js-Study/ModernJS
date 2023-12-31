### 📑목차

[4장. 변수](#모딥다-4장-변수) <br/>
[5장. 표현식과 문](#모딥다-5장-표현식과-문)<br/>
[6장. 데이터 타입](#모딥다-6장-데이터-타입)<br/>

<br/>
<br/>

# 모딥다 4장. 변수

<br/>

## 1. 변수란?

- 애플리케이션 ⇒ **데이터**를 다룸,  데이터를 입력(Input)받아 처리하고 그 결과를 출력(Output)함
- 변수 ⇒ 프로그래밍 언어에서 **데이터를 관리하기 위한 핵심 개념**

<br/>

## 2. 변수가 필요한 이유?

- 아래와 같은 식을 보며 왜 변수가 필요한지 생각해 보자
    
    ```jsx
    10 + 20
    ```
    
- **컴퓨터**는 사람을 모델로 디자인 되어서 사람과 유사하게 동작한다.
    - 즉 위의 식을 계산하려면 **10, 20, +** 라는 기호(리터럴, 연산자)의 **의미를** 알아야 하며, 10 + 20이라는 표현식의 의미도 해석할 수 있어야 한다.
        - 숫자 10, 20 ⇒ 피 연산자
        - **사람** : 두뇌에서 계산 + 기억, **컴퓨터** : 연산(CPU), 기억(메모리)부분 나누어져 있음
        
        |  | 사람 | 컴퓨터 |
        | --- | --- | --- |
        | 계산 | 두뇌에서 연산 | CPU에서 연산 |
        | 기억 | 두뇌에서 기억 | 메모리에서 기억 |
    - 메모리 : 테이터를 저장할 수 있는 메모리 셀의 집합체
    - 셀 하나 : 1bite (8bit)
        - **1바이트 단위**로 데이터를 저장하거나 읽어 들인다.
        - 각 Cell ⇒ 고유의 **메모리 주소**를 가진다.
    - 메모리 주소 ⇒ 공간의 위치를 나타내며 0 ~ 메모리의 크기만큼 정수로 표현된다.
        - ex) 4GB 0 ~ 4,294,967,295 까지의 메모리 주소를 갖는다.
        
        ![Untitled](https://user-images.githubusercontent.com/61978339/90614563-cd1be680-e245-11ea-8732-c430e67b720b.png)
        <sup>[출처 : @starrypro](https://velog.io/@starrypro/Part-4.-%EB%B3%80%EC%88%98)</sup>
        
    - 컴퓨터 : **모든 데이터를 2 진수로 처리**한다. 따라서 **데이터**의 종류와 상관없이 **모두 2 진수로 저장**됨
    
    ```jsx
    10 + 20
    ```
    
- 즉, 위의 연산은 **숫자 값** **10, 20이 메모리 상의 임의의 위치에 저장** ⇒ **CPU**가 이 값을 읽어 들여 **연산을 수행** ⇒ 이 연산의 결과로 **생성된 30이 메모리 상의 임의의 위치에 저장되며 실행된다.**
- 성공적으로 연산이 끝나고 메모리에 값도 저장되었지만, **CPU가 연산해서 만들어낸 숫자 값 30을 재 사용할 수 없다는 문제**가 있다.
    - 저장된 값 30을 사용하려면 메모리 주소를 통해 30이 저장된 메모리 공간에 **직접 접근**해야 하지만 이것은 오류를 발생시키기 쉬운 **위험한 행동**이다. 
    (만약 실수로 운영체제가 사용하고 있는 값을 변경하면 시스템을 멈추게 하는 치명적 오류를 발생시킬 수 있기 때문이다.)
    - 만약 자바스크립트가 개발자의 직접적 메모리 제어를 허용하더라도 여전히 문제는 존재한다. 
    **값이 저장될 메모리 주소는 코드가 실행될 때마다 메모리 상황에 따라 임의로 결정**된다. 즉 **코드가 실행될 때마다 값이 저장될 메모리 주소가 변경**되므로 코드가 실행되기 전에는 정확한 메모리 주소를 알 수 없다.
- **이러한 문제점을 해결하기 위해 변수라는 개념을 사용**한다.
- 프로그래밍 언어는 변수를 통해 기억하고 싶은 값을 메모리에 저장하고, 저장된 값을 읽어 들여 재 사용한다.

<aside>
💡 변수<br/> : 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다.
- 값의 위치를 가리키는 상징적인 이름이다.
- 변수는 프로그래밍 언어의 컴파일러 또는 인터프리터에 의해 값이 저장된 메모리 공간의 주소로 치환되어 실행된다. 
- 따라서 개발자가 직접 메모리 주소를 통해 값을 저장하고 참조할 필요가 없고 변수를 통해 안전하게 값에 접근할 수 있다.

</aside>

- 변수에 여러 개의 값을 저장하는 방법
    
    만약 여러개의 값을 저장하려면 여러개의 변수를 사용해야한다.
    이때 배열이나 객체 같은 자료구조를 사용하면 관련있는 여러개의 값을 그룹화해서 하나의 값처럼 사용할 수 있다.
    

- 앞서 살펴본 코드를 **변수를 사용**해 다시 작성한 것
    
    ```jsx
    var result = 10 + 20
    ```
    
    | 용어 | 의미 |
    | --- | --- |
    | 변수 이름 | 메모리 공간에 저장된 값을 식별할 수 있는 고유한 이름 |
    | 변수 값 | 변수에 저장된 값 |
    | 할당 | 변수에 값을 저장하는 행동 |
    | 참조 | 변수에 저장된 값을 읽어 들이는 행위 |
- 변수 이름을 사용해 참조를 요청하면 자바스크립트 엔진은 **변수 이름과 mapping된 메모리 주소를 통해 메모리 공간에 접근하여 저장된 값을 반환**한다.
- 변수를 통해 저장된 값의 의미를 파악할 수 있도록 변수 이름에 **개발자의 의도를 나타내도록 명확하게 짓는 것이 좋다.** 
또한 이를 통해 코드의 가독성을 높일 수 있다.

<br/>

## 3. 식별자

- 변수 이름 ⇒ 식별자라고도 함, **어떤 값을 구별해서 식별할 수 있는 고유한 이름**을 말함
- 식별자는 메모리 공간에 저장되어있는 어떤 값을 구별하기 위해 **메모리 주소를 기억**(저장)한다. ⇒ 메모리 주소에 붙인 이름 = 식별자
- 즉 값이 저장되어있는 메모리 주소와 매핑 관계를 맺고 이 매핑 정보도 메모리에 저장되어있다.
- 변수 이름 외에도 **메모리상에 존재하는 어떤 값을 식별할 수 있는 이름**은 모두 식별자라고 부른다. (ex. 함수, 클래스, 변수)
- 식별자는 네이밍 규칙을 준수해야 하고 선언에 의해 자바스크립트 엔진에 식별자의 존재를 알림

<br/>

## 4. 변수 선언 과정

- 변수를 생성하는 과정을 말한다
 ⇒ 메모리 공간 확보 + 변수 이름과 확보된 메모리 공간의 주소를 연결해 값을 저장할 수 있도록 준비하는 과정이다.

![Untitled](https://caferion.netlify.app/static/5d9c7305000b3b1c95ac567aa1dcd425/738b8/variable2.png)
<sup>[출처 : caferion](https://caferion.netlify.app/JavaScript/variable/)</sup>

- 변수 선언에 의해 확보된 메모리 공간은 확보가 해제 되기 전까지는 누구도 확보된 메모리 공간을 사용할 수 없도록 보호되므로 안전하다.
- 선언 과정
    - var, let, const 키워드를 사용하여 변수를 선언한다. (먼저 var로 설명)
        - 아래의 변수 선언문 ⇒ 변수 **이름을** **등록** + 값 **저장할 메모리 공간 확보**
        - 확보된 공간에는 자바스크립트 엔진에 의해 **undefined값이 암묵적으로 할당**되어 **초기화** (최초로 값을 할당하는 것을 말함)
        - 즉 **변수 선언**은 **2단계에 걸쳐 수행**된다 ( **선언** + **초기화**)
        
        ```jsx
        var score;
        ```
        
        1. var문제
        2. 
- var 키워드의 문제점
    1. 대표적 문제 : 블록레벨 스코프 X, **함수 레벨 스코프**를 지원 ⇒ **전역 변수가 선언**되어 심각한 부작용 발생 ⇒ ES6부터 let, const를 사용해서 부작용을 방지하고 있음
- 선언 과정에서 궁금증?
    1. 변수이름 등록되는 곳? 
        1. **실행 컨텍스트** 
        : 자바스크립트 엔진이 소스코드를 평가하고 실행하기 위해 필요한 환경을 제공하고 코드의 실행결과를 실제로 관리하는 영역, 실행컨텍스트를 통해 식별자와 스코프가 관리된다. 지금은 변수의 존재를 알린다는 정도만 알아두자
    2. 초기화 필요한 이유? 
        1. 초기화 단계가 없다면 다른 애플리케이션에서 사용한 값이 남아있어 쓰레기 값이 나올 수 있다. 이런 위험을 방지해준다.
    3. 만약 선언하지 않은 식별자에 접근한다면?
        1.  ReferenceError가 발생한다.

<br/>

## 5. 변수 선언의 실행 시점과 변수 호이스팅
    
  ```jsx
  console.log(score) // undefined
  var score;
  ```
    
  - 변수를 참조하는 코드가 선언문 앞에 있으므로 Reference Error가 발생할 것 같지만, undefined가 출력된다.
  - 왜 그럴까?
      - **변수 선언**이 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 **런타임**이 아니라 **그 이전 단계에서 먼저 실행**되기 때문이다.
      - 따라서  변수 선언문이 어디있든지 변수를 참조할 수 있다.
  - 자바스크립트 코드가 실행되는 과정
      - 원래 자바스크립트 엔진은 소스 코드를 **한 줄씩 순차적으로 실행하기에 앞서** **소스코드의 평가 과정을 거치면서 소스코드 실행 준비**를 한다.
      **이 평가 과정 때** 자바스크립트 엔진은 변수 선언을 포함한 **모든 선언문** (변수 선언문, 함수 선언문)등을 코드에서 찾아내 **먼저 실행**한다.
      - 그리고 **평가 과정이 끝나면** 변수 선언을 포함한 **모든 선언문을 제외하고 소스코드를 한 줄씩 순차적으로 실행**한다.
  - **호이스팅**
      - 위처럼 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 호이스팅이라고 한다.
      - var, let, const, function, function*, class 키워드를 사용 해서 선언하는 모든 식별자는 호이스팅 된다.
<br/>

## 6. 값의 할당

```jsx
var score;
score = 80;
```

- 변수에 값을 할당 할 때는 **= 연산자를 사용**한다. 우변의 값을 좌변의 변수에 할당한다.

```jsx
console.log(score) //undefined
var score = 80;
```

- 위 코드는 선언과 할당으로 나누어져 있던 2개의 문을 하나의 문으로 단축 표현한 것이다.
- 변수의 선언과 할당을 하나의 문으로 합쳐도 변수 선언 시점은 런타임 이전이고 할당되는 시점을 소스코드가 순차적으로 평가되는 런타임이므로 선언문 이전에 변수를 참조한다면 undefined 값이 출력 되는 것은 변함이 없다.

![Untitled](https://velog.velcdn.com/images/kdh10806/post/583d4a9a-2436-4611-8aa0-cf89810b7745/image.png)
<sup>[출처 : @kdh10806](https://velog.io/@kdh10806/Javascript-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC)</sup>

- 이때 주의해야 할 점
    - **변수에 값을 할당할 때** 이전 값인 undefined가 저장된 공간을 지우고 그 공간에 80을 할당하는 것이 아니라 **새로운 공간을 확보하여 80을 할당하여 저장**한다는 점이다.
    
    ```jsx
    [예제 4-10]
    console.log(score); // undefined
    
    score = 80; // 값의 할당
    var score;  // 변수 선언
    
    console.log(score); // ??
    ```
<br/>    

## 7. 값의 재할당

```jsx
var score = 80;
score = 90;
```

- 재 할당 : **이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당**하는 것을 말함
- 변수 초기화 후 값을 할당하는 과정도 사실은 재 할당
- 만약 값을 재 할당할 수 없어서 **변수에 저장된 값을 변경할 수 없다면** 변수가 아니라 **상수**라고 함 **const** ⇒ 단 한 번만 할당할 수 있는 변수
- 재 할당 또한 기존 값 80이 할당된 공간을 지우고 거기에 새로운 값을 저장하는 것이 아니라 새로운 메모리 공간 확보 후 그 메모리 공간에 숫자 값 90을 할당한다.

![Untitled](https://velog.velcdn.com/images/kdh10806/post/583d4a9a-2436-4611-8aa0-cf89810b7745/image.png)
<sup>[출처 : @kdh10806](https://velog.io/@kdh10806/Javascript-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC)</sup>

- 이렇게 어떤 식별자와도 연결되지 않은 불필요한 값들은 가비지 콜렉터에 의해 메모리에서 자동 해제된다.
    - 가비지 콜렉터?
        - 애플리케이션이 할당한 메모리 공간을 주기적으로 검사하여 **더 이상 사용하지 않는 메모리를 해제하는 기능**을 말한다.
            - 더 이상 사용하지 않는 메모리 = 어떤 식별자도 참조하지 않는 메모리 공간을 의미한다.
        - **자바스크립트**는 가비지 콜렉터를 내장하고 있는 **매니지드 언어**로서 **가비지 콜렉터를 통해 메모리 누수를 방지**한다.

<br/>

## 8. 식별자 네이밍 규칙

- 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.
- 단 **식별자는** 특수 문자를 제외한 문자, _, $로 시작해야 하며 **숫자로 시작할 수는 없다.**
- **예약어**는 식별자로 사용할 수 없다.
![image](https://github.com/Modren-Js-Study/modernJs/assets/82005305/d855916f-5ad2-49a9-845d-fd2604bde2e7)
<sup>[출처 : 모던자바스크립트 딥다이브]</sup>

- 식별자 네이밍을 할 때는 변수의 존재 목적을 쉽게 이해할 수 있도록 지어야 하며 만약 주석이 필요하다면 존재 목적을 명확히 드러내지 못한 것이므로 좋지 않은 이름이라고 할 수 있다.

- 네이밍 컨벤션
    - 하나 이상의 영어 단어로 구성된 식별자를 만들 때 **가독성 좋게 단어를 한눈에 구분**하기 위해 규정한 명명규칙

<br/> 
<br/> 

[📑목차로 이동](#📑목차)
<br/>
<br/>
<br/>

# 모딥다 5장. 표현식과 문

<br/>

## 1. 값

- **식(표현식)이 평가되어 생성된 결과**, 즉 변수에 할당되는 것을 말함

```jsx
10 + 20; // 30 => 값
```

- 모든 값은 데이터 타입을 가지며 메모리에 **2진수**, 즉 비트의 나열로 **저장**된다.
    - 값은 타입에 따라 다르게 해석될 수 있다.
    - ex. 0100 0001 = 65 = ‘A’
    
<br/>
    

## 2. 리터럴

- **사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법**을 말한다.
- 리터럴은 **평가되어 값을 생성**한다.

```jsx
// 숫자 리터럴
3
```

![Untitled](https://velog.velcdn.com/images%2Fapril_5%2Fpost%2F7cb70aea-bf72-4ca5-a2ed-535c776a8f3e%2Fimage.png)
<sup>[출처 :@april_5](https://velog.io/@april_5/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Deep-Dive-%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC-%EB%AC%B8)</sup>

| 리터럴 | 예시 | 비고 |
| --- | --- | --- |
| 정수 리터럴 | 100 |  |
| 부동소수점 리터럴 | 10.5 |  |
| 2진수 리터럴 | 0b01000001 | 0b로 시작 |
| 8진수 리터럴 | 0o101 | ES6에서 도입. 0o로 시작 |
| 16진수 리터럴 | 0x41 | ES6에서 도입. 0x로 시작 |
| 문자열 리터럴 | 'hello' "world" |  |
| 불리언 리터럴 | true false |  |
| null 리터럴 | null |  |
| undefined 리터럴 | undefined |  |
| 객체 리터럴 | { name: 'april', address: 'Seoul' } |  |
| 배열 리터럴 | [ 1, 2, 3 ] |  |
| 함수 리터럴 | function() {} |  |
| 정규표현식 리터럴 | /[A-Z]+/g |  |

<br/>

## 3. 표현식

- **값으로 평가될 수 있는 문**이다.
- 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다.
- 예시
    - 리터럴
        - 여기서 100은 리터럴 이지만 **자바스크립트 엔진에 의해 평가되어 값을 생성**하므로 그 자체로 표현식이라고 할 수 있다.
        
        ```jsx
        var score = 100; 
        ```
        
    - 숫자의 합
        - 50 + 50도 **평가**되어 숫자 100을 생성하므로 표현식이다.
        
        ```jsx
        var score = 50 + 50; 
        
        ```
        
    - 변수
        - 변수 식별자를 참고하면 변수 값으로 평가된다. 
        식별자는 값을 생성하는 것은 아니지만 **값으로 평가**되므로 표현식이다.
        
        ```jsx
        score;
        ```
        
- 즉, 표현식 ⇒ 리터럴, 식별자, 연산자, 함수 호출등의 조합으로 이뤄질 수 있다. 
⇒ 값으로 평가될 수 있는 모든 문
- 표현식과 표현식이 평가된 값은 동등한 관계이므로 **값이 위치할 수 있는 문법적 위치에는 표현식도 위치할 수 있다.**
    
    ```jsx
    var x = 1 + 2;
    
    x + 3; // 6, x기 3으로 평가되어 계산가능
    ```
    
- 위와 같이 **표현식은 다른 표현식의 일부가 되어 새로운 값을 만들어낼 수 있다.**

<br/>

## 4. 문

- **프로그램을 구성하는 기본 단위이자 최소 실행 단위**
    - 앞으로 문, 표현식이라는 단어가 자주 등장할텐데 이를 구별하고 해석할 수 있다면 자바스크립트 엔진입장에서코드를 읽을 수 있고 결과를 예측 하는 데에 도움이 된다.
- **프로그램은 문의 집합**이며 **프로그래밍은 문을 작성하고 순서에 맞게 나열**하는 것이다.
- 문 ⇒ 여러 토큰으로 구성,
- 토큰 ⇒ 문법적 의미를 가지며 문법적으로 더 이상 나눌 수 없는 코드를 말함
    - 키워드, 식별자, 연산자, 리터럴, 세미콜론, 마침표 등
    
    ![Untitled](https://velog.velcdn.com/images%2Fgavri%2Fpost%2Fa669ee5d-3fbd-465c-b904-eb76a3e6743a%2Fimage.png)
    <sup>[출처 :@gavri](https://velog.io/@gavri/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Deep-Dive-05)</sup>
    
- **문 ⇒ 명령문 이라고도 부른다.** 즉 컴퓨터에 내리는 명령이다.
    - 문이 실행되면 무슨 일이든지 일어남
    - **선언문**, **할당문**, **조건문**, **반복문** 등으로 구분할 수 있다.
        
        ```jsx
        [예제 5-9]
        
        // 변수 선언문
        var x;
        
        // 표현식 문(할당문)
        x = 5;
        
        // 함수 선언문
        function foo () {}
        
        // 조건문
        if (x > 1) { console.log(x); }
        
        // 반복문
        for (var i = 0; i < 2; i++) { console.log(i); }
        ```

<br/>        

## 5. 표현식인 문과 표현식이 아닌 문

- 문은 아래와 같이 분류 가능하다.
    
    
    | 문 | 의미 | 예시 |
    | --- | --- | --- |
    | 표현식인 문 | 값으로 평가 가능, 평가된 값을 반환 | ex. 할당문 |
    | 표현식이 아닌 문 | 값으로 평가 X | ex. 변수 선언문 |
- 표현식 : 문의 일부일 수도 있고 그 자체로 문이 될 수 도 있음

```jsx
// 변수 선언문 => 값으로 평가할 수 없으므로 표현식 X
var x;

x = 1 + 2 // 3이라는 값으로 평가될 수 있으므로 표현식, 완전한 문이기도 함

// 1, 2, 1+2, x = 1+2 모두 표현식이다.
```

- 표현식과 문을 구별하는 방법?
    - 가장 간단한 방법 : 변수에 할당해 보는 것
        - 표현식인 문은 값에 할당할 수 있으므로 변수에 할당했을 때 에러가 나지 않을 것이다.
    - **크롬 개발자 도구**에서 **표현식이 아닌 문을 실행**하면 완료 값 **undefined를 출력**한다.
    - 예시
        
        ```jsx
        var x; // => 표현식 X인 문
        x = 100 // => 표현식인문인 동시에 완전한 문이기도 함
        
        var foo = x = 100 // => 이렇게 변수에 할당 가능
        console.log(foo) // 100
        ```
        
        ```jsx
        var foo = var x // SyntaxError : Unexpected token var
        ```
        
        - 크롬 개발자 도구에서 표현식이 아닌 문을 실행하면 완료 값 undefined를 출력한다.
        - 표현식인 문은 평가된 값을 반환한다.

<br/> 
<br/>

[📑목차로 이동](#📑목차)
<br/> 
<br/> 
<br/> 


# 모딥다 6장. 데이터 타입

<br/> 

## 1. 데이터 타입

자바스크립트의 모든 값은 데이터 타입을 갖는다.

JavaScript ES6는 7개의 데이터 타입을 제공하는데 이는 **원시타입**과 **객체 타입**으로 분류된다.

![image](https://github.com/Modren-Js-Study/modernJs/assets/82005305/e58ea799-47de-4816-93d8-ad0c1e27fd40)
<sup>[출처 : 모던 자바스크립트 딥다이브]</sup>

```jsx
1 !== '1'
```

위 둘은 비슷해 보이지만 전혀 다른 값이며 확보해야 할 메모리의 크기 값도 다르고 저장되는 2진수도 다르며 읽어 들여 해석하는 방식도 다르다.

이처럼 개발자는 명확한 의도를 가지고 타입을 구별해서 값을 생성할 것이고, 자바스크립트 엔진은 이를 구별하여 값을 취급할 것이다.
자바스크립트가 제공하는 데이터 타입의 특징은 다음과 같다.

<br/> 

## 2. 숫자 타입

C, Java의 경우 정수, 실수를 구분하여 타입을 제공하지만 **자바스크립트의 경우는 독특하게 하나의 타입만 존재**하는데 바로 **Number**이다.

**모든 수를 실수로 처리**하고, 정수를 따로 표현하는 타입은 존재하지 않는다.

따라서 정수로 표시된다 해도 **사실은 실수**이며 정수로 표시되는 수끼리 연산해도 실수가 나올 수 있다.

이들의 값을 참조 하면 모두 10진수로 해석된다.

```jsx
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65
console.log(binary === octal); // true
console.log(octal === hex);    // true
```

숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.

- Infinity
- -Infinity
- NaN (Not a Number) ⇒ 대소문자 주의

```jsx
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);       // Infinity
console.log(10 / -0);      // -Infinity
console.log(1 * 'String'); // NaN
```

<br/> 

## 3. 문자열 타입

- 텍스트 데이터를 나타내는데 사용한다.
- **‘**, **“** 으로 감싸서 표현한다.
- 0개 이상의 **16비트 유니코드 문자의 집합**으로 전세계 대부분의 문자를 표현할 수 있다.
- 자바스크립트 문자열은 다른 언어와 달리 **원시 타입**이며, **변경 불가능한 값**이다. (Immutable)
    - 따라서 문자열이 생성되면 **그 문자열을 변경할 수 없다.**
- 예시

```jsx
// 문자열 타입
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱 (ES6)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";
```

<br/> 

## 4. 템플릿 리터럴

- **ES6부터 도입된 표기법**으로 **편리한 문자열 처리 기능을 제공**한다. 
(멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등)
- 런타임에 일반 문자열로 변환되어 처리된다.
- **` `** 이렇게 생긴 백틱을 사용한다.
    
    
    4-1. 멀티라인 문자열
    
    - 일반 문자열 내에서는 개행이 허용되지 않기 때문에 일반 문자열에서 표현할 때는 아래와 같이 **이스케이프 시퀀스**를 사용해야 한다.

    ![image](https://github.com/Modren-Js-Study/modernJs/assets/82005305/9daa6612-50eb-48b2-b5ba-b218856f114a)
    <sup>[출처 : 모던 자바스크립트 딥다이브]</sup>

    - 예제
    
    ```jsx
    [예제 6-10]
    
    var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
    
    console.log(template);
    ```
    
    ```jsx
    [예제 6-11]
    
    var template = `<ul>
      <li><a href="#">Home</a></li>
    </ul>`;
    
    console.log(template);
    ```
    
    4-2. 표현식 삽입
    
    - **문자열 + 문자열**인 경우 템플릿 리터럴을 사용하면 훨씬 간편하게 문자열을 조합할 수 있고 **가독성도 높아**진다.
    - **${}로 표현식을 감싸서 표현**한다. 이때 감싸진 표현식의 평가 결과가 **문자열이 아니더라도 문자열로 강제 치환**된다.
    - 예시
    
    ```jsx
    [예제6-12]
    
    var first = 'Ung-mo';
    var last = 'Lee';
    
    // ES5: 문자열 연결
    console.log('My name is ' + first + ' ' + last + '.'); // My name is Ung-mo Lee.
    ```
    
    ```jsx
    var first = 'Ung-mo';
    var last = 'Lee';
    
    // ES6: 표현식 삽입
    console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.
    ```
    
    ```jsx
    console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
    ```
    
    - **표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다.** 
    (템플릿 리터럴이아닌 일반 문자열에서의표현식 삽입은 문자열로 취급된다.)
    
    ```jsx
    console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}
    ```

<br/>     

## 5. 불리언

- 논리적 참, 거짓을 나타내는 **true, false**가 이에 해당된다.

```jsx
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false
```

<br/> 

## 6. undefined 타입

- undefined만 해당
- **개발자가 의도적으로 할당하기 위한 값이 아닌** **자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값**이다.

<br/> 

## 7. null 타입

- null 이 유일하게 해당, 대소문자 구분 주의!
- undefined와 다르게 **변수에 값이 없다는 것을 의도적으로 명시하기 위해 사용하는 값**이다.
- null을 사용한다는 것은 **변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미**이다.
- 또는 **함수가 유효한 값을 반환할 수 없는 경우** 명시적으로 null을 반환하기도 한다.
    
    ```jsx
    <!DOCTYPE html>
    <html>
    <body>
      <script>
        var element = document.querySelector('.myClass');
    
        // HTML 문서에 myClass 클래스를 갖는 요소가 없다면 null을 반환한다.
        console.log(element); // null
      </script>
    </body>
    </html>
    ```
<br/>    

## 8. 심벌타입

- ES6에서 추가된 7번째 값, **변경 불가한 원시 타입의 값**이다.
- **다른 값과 중복되지 않는 유일무이한 값**
- 주로 이름이 충돌할 위험이 없는 **객체의 유일한 프로퍼티 키를 만들기 위해 사용**한다.
- 심벌 외의 원시 값은 리터럴을 통해 생성하지만 심벌은 **Symbol 함수를 호출해 생성**한다.
이때 **생성된 심벌의 값은 외부에 노출되지 않고 다른 값과 절대 중복되지 않는다.**

```jsx
// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value
```

<br/> 

## 9. 객체타입 ⇒ 11장에서 자세히…

- 중요한 점 : 자바스크립트를 이루고 있는 거의 모든 것이 객체!

<br/> 

## 10. 데이터 타입의 필요성

왜 필요할까?

1. 값을 저장할 때 **확보해야 하는 메모리 공간의 크기 결정**을 위해
    1. 몇 바이트의 공간을 사용해야 낭비와 손실 없이 저장할 수 있을지 알기 위해서 필요하다.
2. 값을 참조할 때 **한번에 읽어 들일 메모리 공간의 크기를 결정**하기 위해
    1. 정해진 공간 단위로 읽어 들이지 않으면 값이 훼손될 수 있다.
3. 메모리에서 읽어 들인 2 진수를 어떻게 해석할지 결정하기 위해
    1. 바이트 = 메모리 셀의 개수

```jsx
var score = 100;

//100은 숫자 => 8바이트의 메모리 공간 확보함
//score 변수에 숫자 100이 할당되어 있으므로 JS엔진은 score를 숫자 타입으로 인식한다.

// 그렇다면 메모리에 저장된 2진수는 어떻게 해석할까?
//메모리에 저장된 값은 타입에 따라 다르게 해석될 수 있다.

//ex. 0100 0001 => 숫자 : 65, 문자열 : 'A'
//score 변수에 숫자 100이 할당되어 있으므로 JS엔진은 score를 숫자 타입으로 인식한다.
```

<br/> 

## 11. 동적 타이핑

- **동적 타입 언어** vs **정적 타입 언어**
    
    
    |  | 언어 | 특징 | 장점 |
    | --- | --- | --- | --- |
    | 동적 | 자바스크립트, 파이썬, php, 루비, 리스프, 펄… | 변수 선언 시 타입을 선언하지 않음, 
    var, let, const로 선언 | 어떠한 데이터 타입의 값이라도 자유롭게 할당 가능 |
    | 정적 | C, 자바 | 변수 선언 시 변수에 할당할 수 있는 값의 타입을 사전에 정함 | 안정적 코드 구현 가능,런타임에 발생하는 에러를 줄일 수 있음 |
- **정적 타입 언어**
    - 추후 변경 불가, 컴파일 시점에 타입 체크를 통해 올바른지 확인하고 잘못된 경우 에러가 발생하여 프로그램의 실행이 중지된다.
- **동적 타입 언어**
    - typeof 연산자로 변수의 타입을 확인 가능
    - 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고, 이 타입은 언제든지 변경 가능하다.
    - 할당에 의한 타입 추론 ⇒ ‘**동적 타이핑**’이라고 함, 자바스크립트는 동적 타입 언어
- 예시
    
    ```jsx
    var foo;
    console.log(typeof foo);  // undefined
    
    foo = 3;
    console.log(typeof foo);  // number
    
    foo = 'Hello';
    console.log(typeof foo);  // string
    
    foo = true;
    console.log(typeof foo);  // boolean
    
    foo = null;
    console.log(typeof foo);  // object
    
    foo = Symbol(); // 심벌
    console.log(typeof foo);  // symbol
    
    foo = {}; // 객체
    console.log(typeof foo);  // object
    
    foo = []; // 배열
    console.log(typeof foo);  // object
    
    foo = function () {}; // 함수
    console.log(typeof foo);  // function
    ```
    

- **동적 타입 언어의 단점**
    - 편리함의 이면에는 위험이 있다.
    - 복잡한 프로그램에서는 **변수 값 추적이 어려울 수 있음**
    - 변수의 값을 확인하기 전에는 **타입을 확신할 수 없음**
    - **개발자의 의도와 다르게 자바스크립트 엔진에 의해 타입이 자동으로 변환되기도 함**
    - 유연성은 높지만 신뢰성은 떨어질 수 있음
- **동적 타입 언어의** 에러를 줄이기 위한 노력
    - 변수 ⇒ 꼭 필요할 때 제한적으로 사용
    - 변수의 **유효범위(스코프)를 좁게**
    - 전역 변수 사용 줄이기
    - 변수 이름은 **목적이나 의미를 파악할 수 있도록 짓자**

[📑목차로 이동](#📑목차)
