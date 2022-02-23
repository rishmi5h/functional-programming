const arr = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

const fruitOrVeg = (array) =>
  array.map((item) => {
    return item.name.length > 5
      ? { ...item, type: "vegetable" }
      : { ...item, type: "fruit" };
  });
console.log(fruitOrVeg(arr));
