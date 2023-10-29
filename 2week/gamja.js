//1. 3의 배수인 경우 출력을 건너뛰기
// => 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20 순서대로 출력
//힌트 if문 사용, continue문 사용, 이항연산자 % => 나머지

for (let i = 1; i <= 20; i++) {
    //3의 배수 손절치는 코드
    // 정답
    //if (i % 3 === 0) {
    //continue;
    //}
    console.log(i);
  }

//% 연산자로 3으로 나누었을 때 나머지가 0인지를 검사 => 3의 배수인지 확인
//3의 배수인 경우 => "continue" 문으로 건너뛰기
//3의 배수가 아닌 경우 => 해당 숫자를 출력

//-----------------------------------------------------------

// 2. 입력된 숫자에 따라 값과 타입을 반환하기
//입력된 값 짝수일 경우 : 숫자 -> 문자열 변환,
//입력된 값 홀수일 경우 : 숫자 그대로 반환

function transformNumber(inputNumber) {
   // Add your magic here! ㅋㅋㅋ
   //정답
   //if (inputNumber % 2 === 0) {
    // 입력된 숫자가 짝수인 경우
    //const transformedValue = inputNumber.toString(); // 숫자를 문자열로 변환
    //console.log(`${transformedValue} (타입: ${typeof transformedValue})`);
    //return transformedValue;
  //} else {
    // 입력된 숫자가 홀수인 경우
    //console.log(`${inputNumber} (타입: ${typeof inputNumber})`);
    //return inputNumber;
  //}
  }
// 테스트
transformNumber(2);
transformNumber(3);

//if-else 조건문을 사용하여 짝수와 홀수를 구분
//typeof 연산자를 사용하여 값을 확인하여 타입을 표시
