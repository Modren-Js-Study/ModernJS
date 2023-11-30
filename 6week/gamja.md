1. JavaScript에서 프로토타입 기반 상속이 무엇인가요? (5점)
// 정민님이 나쁜걸 배우셨다

=====================================

2. 주어진 배열의 모든 요소를 합하여 결과를 반환하는 함수 작성하깅 (95점)

function sumArray(arr) {
  return arr.reduce((acc, current)=> acc+current, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); ====> 15