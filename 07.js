const arr = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

const sumAge = (array) =>
  array.map((item) => item.age).reduce((acc, curr) => acc + curr);

console.log(sumAge(arr));
