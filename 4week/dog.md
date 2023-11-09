배열, 객체를 const로 선언했는데 요소나 속성을 추가할 수 있는 이유는?

const outer = () => {  
 var a = 1;  
 var inner = () => {  
 return a++;  
 };  
 return inner;
};

a 를 증가시켜주세요.
