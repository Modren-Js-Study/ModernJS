var a = 1;

while (true) {
    a++;
    if (a === 1) {
        console.log(a);
    } else if (a === 2) {
        console.log(a);
    } else if (a === 3) {
        console.log(a);
    } else if (a === 4) {
        console.log(a);
    } else if (a === 5) {
        console.log(a);
        break;
    }
    // if ...else if문을 a === 5 break; 까지 한다면 원하는대로 a === 5가될 때 멈추지 않습니다 이유는?
    if (a === 3) {
        console.log(a);
    }
    if (a === 4) {
        console.log(a);
    }
    if (a === 5) {
        break;
    }
}

for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
        if (j === 9) {
        }
    }
}
// 9단까지 출력하는 구구단을 완성해주세요!
// console.log // 예시 ->  2 * 9 18  ?단 끝!
