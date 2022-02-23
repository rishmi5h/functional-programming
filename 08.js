const arr = ["You", "all", "are", "rockstars"];
const output = arr.map((item, index) => {
  return { index: item };
});

const arrayToObject = (array) => {
  let object;
  array.map((item, index) => {
    object = {
      index: item,
    };
  });
  return object;
};

console.log(arrayToObject(arr));
