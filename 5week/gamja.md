1. 프로퍼티는 "데이터 프로퍼티"와 "접근자 프로퍼티"로 구분할 수 있다.

데이터 프로퍼티 -> 키와 값으로 구성된 일반적인 프로퍼티

접근자 프로퍼티 -> 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티

========================

2. seoul 객체가 과적합되었는지 여부를 확인하는 코드를 작성해 주세요.

// 생성자 함수 정의
function City(name, population) {
  this.name = name;
  this.population = population;
  this.isOverpopulated = function() {
    return this.population > 10000000; // 1000만 명 이상이면 과적합으로 간주
  };
}

// 객체 생성
const seoul = new City('Seoul', 9900000);

------------------------------

정답: console.log(seoul.isOverpopulated());

- City 생성자 함수로 seoul 객체를 생성 -> name과 population 프로퍼티를 갖고 있음

- isOverpopulated 메서드 사용 -> 현재 population이 1000만 명 이상이면 "과적합되었다"고 판단

- seoul 객체의 isOverpopulated 메서드 호출 -> 현재 population이 1000만 명을 넘었는지 여부를 확인하고 출력

-  만약 과적합이라면 true, 그렇지 않으면 false가 출력