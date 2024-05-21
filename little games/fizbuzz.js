let output = [];
function fizzBuzz() {
  for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output.push("fizbuzz");
    } else if (i % 3 == 0) {
      output.push("fizz");
    } else if (i % 5 == 0) {
      output.push("buzz");
    } else {
      output.push(i);
    }
  }
  console.log(output);
}

fizzBuzz();

