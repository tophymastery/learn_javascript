// this
// In the global execution context, refer to global object
// If the function is called as a method of an object, 'this' is bound to object the methd is called on

// 1
// Run below in browser inspector it return true
// this === window

// 2
// Run below in node-cli it return true
// this === global

// 3
// BUT: If run below in node execution (node 02_this.js) it return {}
// console.log(this);

// 4
// Run below command in browser it return window
// Because it is method of global object (global object in browser is window)
// function whatIsThis () { console.log(this); }
// whatIsThis();

// 5
// 'this' is the person object
var person = {
  firstName: 'person-Tophy',
  lastName: 'person-Mastery',
  whatIsThis: function () { console.log(this); },
  greet: function () { console.log('person Hi ' + this.firstName); },
  greetWithSay: function (whatToSay) { console.log(whatToSay + ', person Hi ' + this.firstName); }
};

person.whatIsThis();
person.greet();

// 6 bind
// Setting 'this' manually
var student = {
  firstName: 'student-tophy',
  lastName: 'student-mastery'
};

// 'this' context belong to student
student.greet = person.greet;
student.greet();

// 'this' context belong to student
var studentGreet = person.greet.bind(student);
studentGreet();

// student object itself doesn't has method greet
console.log(JSON.stringify(student));

// 7 call
person.greet.call(student);

// 8 bind and apply with parameter
student.greetWithSay = person.greetWithSay;
student.greetWithSay('Student-Say');

var bindWithSay = person.greetWithSay.bind(student, 'Bind-Say');
bindWithSay();

// apply run immediately and pass parameter in array
person.greetWithSay.apply(student, ['Apply-Say']);