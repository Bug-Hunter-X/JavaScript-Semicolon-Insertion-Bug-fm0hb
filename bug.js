function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10

//This looks fine, right?  Wrong!

function foo(a,b){
  return a + b; // Missing semicolon
}

function bar(a,b){
  return foo(a, b) * 2; // Missing semicolon here too!
}
console.log(bar(2,3)); //Throws an error!