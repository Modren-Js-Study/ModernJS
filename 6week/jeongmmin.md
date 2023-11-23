## 1. 아래 코드를 보고 물음에 답해주세요

```jsx
function Person(name) {
    this.name = name;
    this.sayHello = function() {
        return `Hi, ${this.name}`
    }
}

let person1 = new Person('John');
let person2 = new Person('Jane');

console.log(person1.__proto__ === person2.__proto__);

```

위의 코드는 false가 나오게 됩니다. person1의 sayHello함수와 person2 sayHello함수가 같도록, 결과가 true가 나오게 만드려면 코드를 어떻게 수정해야 할까요?
<br/>
(프로토 타입을 사용하여 만들어주세요)

<br/>
<br/>

## 2. 아래 코드를 실행한 후에 console.log()의 값은 무엇일까요?

```jsx
function Shape() {
    this.name = 'Shape';
}

Shape.prototype.getName = function() {
    return this.name;
}

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

let circle = new Circle(5);
console.log(circle.getName());


```