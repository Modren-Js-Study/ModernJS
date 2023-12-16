1. 다음 코드는 어떤 결과가 나올까요? (3점)

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getInfo = function() {
  return this.title + " by " + this.author;
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

const getInfoFunction = book1.getInfo;

console.log(getInfoFunction());

======================================

2. 다음 코드의 실행 결과는 뭘까용? (97점)

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter2();
counter1();

a) 1 1 2
b) 1 1 1
c) 1 2 3
d) 1 2 1


