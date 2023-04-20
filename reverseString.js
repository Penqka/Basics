var string = "Hello World";

function loopString() {
  let output = "";
  for (i = 0; i < string.length; i++) {
    output += string[i];
  }
  return output;
}

function reverseLoop() {
  let output = "";
  for (i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}

var reverseString = string.split("");
var reverseArray = reverseString.reverse();

let a = loopString();
let b = reverseLoop();

console.log(a);
console.log(b);
