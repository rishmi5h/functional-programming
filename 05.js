const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumArr = (array) =>
  array.filter((item) => item > 50).reduce((acc, curr) => acc + curr, 0);

console.log(sumArr(arr));
