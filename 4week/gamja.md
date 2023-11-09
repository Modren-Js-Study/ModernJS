### 아래 두 문제의 출력 결과는?
=======================================

let x = 10;

function updateX() {
  if (true) {
    let x = 20;
  }

  console.log(x);
}

updateX();

## 정답: 10
updateX 함수 내부의 let x = 20; -> 지역 변수 
이 변수는 if 블록 내부에서만 유효한 지역 변수 -> 외부 전역 변수 x와는 별개의 변수
따라서 console.log(x)에서 참조하는 x -> 함수 외부의 전역 변수 x
========================================

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

## 정답: 5, 5, 5, 5, 5
for에서 setTimeout 함수 5번 호출
setTimeout은 비동기적 동작 -> 루프가 끝난 후 콜백 실행
콜백 함수 내부에서 출력하려는 i 변수는 이미 5가 되어 있음
