const hyphenBtwEven = (num) => {
  let array = num.toString().split("");
  return array.reduce((acc, curr) => {
    return parseInt(acc) % 2 === 0
      ? curr % 2 === 0
        ? acc + "-" + curr
        : acc + curr
      : acc + curr;
  });
};

console.log(hyphenBtwEven(22345687));
