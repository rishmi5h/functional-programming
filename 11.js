const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

const joinWithHyphen = (array) => {
  return array.reduce((acc, curr) => acc + "-" + curr);
};

console.log(joinWithHyphen(arr));
