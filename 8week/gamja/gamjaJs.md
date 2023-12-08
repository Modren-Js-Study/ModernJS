# 바삭한 객체지향과 절차지향

========================================

## 절차지향 프로그래밍 (Procedural Programming)
: 프로그램을 수행해야 하는 일련의 절차 또는 태스크를 중심으로 구조화된 프로그래밍 패러다임


- 프로그램이 일련의 명령문으로 이루어짐
- 데이터와 함수가 분리되어 있음
- 코드의 순차적인 실행에 중점을 둠

⭕
- 간단하고 직관적
- 작은 규모의 프로젝트나 순차적인 작업에 적합

❌
- 어려운 유지보수
- 어려운 코드 재사용


========================================


## 객체지향 프로그래밍 (Object-Oriented Programming, OOP):
: 프로그램을 객체들의 집합으로 구성하고, 객체들 간의 상호작용을 중심으로 하는 프로그래밍 패러다임


- 데이터와 함수를 하나의 단위로 묶어 "객체"를 형성
- 상속, 캡슐화, 다형성과 같은 개념을 사용하여 코드를 구성
- 코드의 재사용성과 유지보수성 UP
  
⭕
- 모듈성이 높아 코드 재사용 용이
- 복잡한 프로젝트에 적합
- 쉬운 유지보수

❌
- 높은 학습 곡선
- 작은 규모의 프로젝트에서는 오버헤드가 발생할 수 있음


========================================


## [ 예시가 빠질 수 없죠 ! ! ! ! ! ]


### 절차지향 프로그래밍 예시:

```
// 절차적 프로그래밍 예시
function calculateArea(radius) {
  return 3.14 * radius * radius;
}

let circleArea = calculateArea(5);
console.log(circleArea);
```


### 객체지향 프로그래밍 예시:

```
// 객체지향 프로그래밍 예시
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return 3.14 * this.radius * this.radius;
  }
}

let myCircle = new Circle(5);
let circleArea = myCircle.calculateArea();
console.log(circleArea);

```


### 대규모 및 복잡한 소프트웨어 개발 (코드의 재사용성과 유지보수성) -> 객체지향 프로그래밍
### 간단하고 직관적인 작업 -> 절차지향 프로그래밍