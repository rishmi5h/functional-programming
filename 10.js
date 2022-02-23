const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

// a

console.log(inventory.filter((item) => item.quantity < 2));

// b

console.log(
  inventory.map((item) => item.quantity).reduce((acc, curr) => acc + curr)
);

// c

console.log(inventory.filter((item) => item.quantity === 0));
