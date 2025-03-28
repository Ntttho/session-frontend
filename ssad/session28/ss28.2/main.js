let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

car["color"] = "red";
car["year"] = 2022;
console.log(car);

for (const key in car) {
  console.log(`${key} : ${car[key]}`);
}
