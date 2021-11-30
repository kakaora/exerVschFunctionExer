function addition(x1, x2) {
  var sum = x1 + x2;
  document.write(sum);
  console.log("Add " + sum);
}

var x1 = parseInt(prompt("First Number"));
var x2 = parseInt(prompt("Second Number"));

console.log(addition(x1, x2));

function largest(y1, y2, y3) {
  var largest = Math.max(y1, y2, y3);
  document.write(largest);
  console.log("Largest " + largest);
}

var y1 = parseInt(prompt("First Number Largest Test"));
var y2 = parseInt(prompt("Second Number Largest Test"));
var y3 = parseInt(prompt("Third Number Largest Test"));

console.log(largest(y1, y2, y3));

var z1 = parseInt(prompt("First Number Even/Odd Test"));

if(z1 % 2 == 0) {
  console.log("The number is even.");
}

// if the number is odd
else {
  console.log("The number is odd.");
}
