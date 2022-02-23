const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

const output = family.filter((item) => item.haveCycle).map((item) => item.name);

console.log(output);
