## 1. 다음 빈칸에 들어갈 답은 무엇일까요?
심벌 값을 프로퍼티 키로 사용하여 프로퍼티를 생성하면 <br/>
외부에 노출할 필요가 없는 프로퍼티를 은닉할 수 있다.<br/>
심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 [ &nbsp; A &nbsp;  ]문이나 <br/>
[ &nbsp; B &nbsp; ],&nbsp; [ &nbsp; C &nbsp;] 메서드로 찾을 수 없다.

A : for ...in
B : Object.keys
C : Object.getOwnPropertyNames

<details>
<summary></summary>

그렇다면 symbol을 찾을 수 있는 메서드는 ?

Object.getOwnPropertyNames

</details>

<br/>
<br/>

## 2. 다음 빈칸에 들어갈 답은 무엇일까요?

[ &nbsp;A&nbsp; ]는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 [ &nbsp;B&nbsp; ] 프로퍼티를 갖는 객체를 말한다.<br/>
[ &nbsp;A&nbsp; ]는 [ &nbsp;B&nbsp; ]를 갖기 때문에 for문으로 순회할 수 있고, 인덱스를 나타내는 숫자 형식을 문자열을 [ &nbsp;C&nbsp; ]로 가지므로 마치 배열처럼 인덱스로 [ &nbsp;C&nbsp; ]에 접근할 수 있다.

A : 유사배열 객체
B : length 프로퍼티
C : 프로퍼티 키

<br/>
<br/>


## 3. 다음 arr1, arr2를 합치고 싶습니다. ES5와 ES6에 해당하는 방법으로 문제를 풀어주세요.

```jsx

let arr1 = [2, 3];
let arr2 = [4, 7];

```


let arr = [2,3].concat([4,7])
let arr = [...arr, ...arr2]