// javascript is a single-threaded, syncronous language
// javascript has functions that act asyncronously

// 1 this function can freeze everything in 10 seconds
function hang (seconds) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + (seconds * 1000)) {}
}

// hang(10);

// asynchronous in javascript step
//   1 execution stack
//   2 browser APIs
//   3 function queue
//   4 event loop
// browser look into exec stack and run it, if it's empty then pop job from function queue

// 2
var printOne = () => console.log('1');
var printTwo = () => console.log('2');
var printThree = () => console.log('3');
setTimeout(printOne, 1000);
setTimeout(printTwo, 0);
printThree();