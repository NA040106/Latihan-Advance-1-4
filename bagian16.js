function linearSearch(array, target) {
  let steps = 0;

  for (let i = 0; i < array.length; i++) {
    steps++;

    if (array[i] === target) {
      return {
        index: i,
        steps: steps
      };
    }
  }

  return {
    index: -1,
    steps: steps
  };
}

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let steps = 0;

  while (start <= end) {
    steps++;

    const middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
      return {
        index: middle,
        steps: steps
      };
    }

    if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return {
    index: -1,
    steps: steps
  };
}

const numbers = [];

for (let i = 1; i <= 10000; i++) {
  numbers.push(i);
}

const target = 10000;

const linearResult = linearSearch(numbers, target);
const binaryResult = binarySearch(numbers, target);

console.log("Linear Search:");
console.log(linearResult);

console.log("Binary Search:");
console.log(binaryResult);

console.log("Perbandingan langkah:");
console.log("Linear Search:", linearResult.steps);
console.log("Binary Search:", binaryResult.steps);