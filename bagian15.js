function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log("Faktorial 5:");
console.log(factorial(5));

console.log("Faktorial 6:");
console.log(factorial(6));

function countDown(number) {
  if (number === 0) {
    return;
  }

  console.log(number);
  countDown(number - 1);
}

console.log("Countdown:");
countDown(5);