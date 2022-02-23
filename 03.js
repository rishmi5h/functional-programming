const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const lessThan8 = (array) =>
  array.filter((item) => item <= 8).filter((item) => item % 2 === 0);

console.log(lessThan8(arr));
