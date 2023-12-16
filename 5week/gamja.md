1. 프로퍼티는 " "와 " "로 구분할 수 있다.
(빈칸에 들어갈 말과 그것이 무엇인지 설명하시오!)


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

==========================

