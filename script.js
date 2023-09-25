const data = require("./food.json");

//task1
console.log(data);

//task2
function catVeg(data) {
  data.map((item) => (item.category == "Vegetable" ? console.log(item) : null));
}
catVeg(data);

//task3
function catPro(data) {
  data.map((item) => (item.category == "Protein" ? console.log(item) : null));
}
catPro(data);

//task4
function catNuts(data) {
  data.map((item) => (item.category == "Nuts" ? console.log(item) : null));
}
catNuts(data);

//task5
function catGrains(data) {
  data.map((item) => (item.category == "Grains" ? console.log(item) : null));
}
catGrains(data);

//task6
function catDairy(data) {
  data.map((item) => (item.category == "Dairy" ? console.log(item) : null));
}
catDairy(data);

//task7
function calAbove(data) {
  data.map((item) => (item.calorie > 100 ? console.log(item) : null));
}
calAbove(data);

//task8
function calAbove(data) {
  data.map((item) => (item.calorie < 100 ? console.log(item) : null));
}
calAbove(data);

//task9
function rankProtien(a, b) {
  return a.protiens - b.protiens;
}
console.log(data.sort(rankProtien).reverse());

//task10
function rankCab(a, b) {
  return a.cab - b.cab;
}
console.log(data.sort(rankCab));
