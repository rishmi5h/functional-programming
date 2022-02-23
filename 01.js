const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const evenToOdd = (array) =>
  array.map((item) => {
    item % 2 === 0 ? (item = item + 1) : item;
    return item;
  });

console.log(evenToOdd(arr));
