### 아래 두 문제의 출력 결과는?

=======================================

1. 
let x = 10;

function updateX() {
  if (true) {
    let x = 20;
  }

  console.log(x);
}

updateX();


========================================

2. 
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}


