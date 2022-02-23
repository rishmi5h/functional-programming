const arr = [1, 2, 3, 7, 5, 6, 8, 9];

const productArr = (array) =>
  array.filter((item) => item % 2 === 0).reduce((acc, curr) => acc * curr, 1);

console.log(productArr(arr));
