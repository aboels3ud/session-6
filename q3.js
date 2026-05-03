// ===== Session 06 - Exercise 3: FizzBuzz =====
// Classic FizzBuzz problem:
// - If divisible by 3 → "Fizz"
// - If divisible by 5 → "Buzz"
// - If divisible by both → "FizzBuzz"
// - Otherwise → the number itself

function fizzBuzz(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += i;
    }
    result += "\n";
  }

  return result;
}

console.log(fizzBuzz(30));
