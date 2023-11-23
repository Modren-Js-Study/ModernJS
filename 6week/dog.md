````
function Person(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.sayHello = function() { console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

function Student(name, age, major) {
Person.call(this, name, age);
this.major = major;
}

// 문제가 있는 부분 Student.prototype = Person.prototype; Student.prototype.study = function() {
console.log("Studying " + this.major);
};

var john = new Student("John", 20, "Computer Science");

// 이 부분에서 예상치 못한 결과가 나올 수 있는 이유는 무엇일까요?
john.sayHello();


````




2. 프로토타입 + strict mode는?