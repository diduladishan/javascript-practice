const originalArray = [4, 3, 1, 4, 2];

const sum = originalArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 14
