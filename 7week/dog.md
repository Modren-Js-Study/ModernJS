1. 실행 순서는?

```jsx
console.log('Global Context');
function outer() {
  console.log('Outer Function');
  const variable1 = 'I am from outer!';
  function middle() {
    console.log('Middle Function');
    const variable2 = 'I am from middle!';
    function inner() {
      console.log('Inner Function');
      const variable3 = 'I am from inner!';
        setTimeout(function delayed() {
              console.log('Delayed Function');
              console.log(variable1);
              console.log(variable2);
              console.log(variable3);
               }, 1000); }
                inner(); }
                middle(); }
                outer();
```

2.

```jsx

function outer(x) {
 return function middle(y) {
  return function inner(z){
   return function deepest(w){
    return function final(v){
     return x * y + z - w * v;
    };
   };
  };
 };
}
const closureExample = outer(2)(3)(4)(1);
console.log(closureExample(2)); // 출력: ?
```
