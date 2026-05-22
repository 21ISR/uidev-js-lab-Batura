const grade = [4, 5, 3, 5, 2, 4, 5, 3]
const sum = grade.reduce((acc, n) => acc + n, 0);
const avg = (sum / grade.length).toFixed(2);
console.log(`${avg}`)


const result = grade
  .filter(grade => grade > 3)
  .map(grade => `Оценка: ${grade}`);

console.log(result);

const fruct = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sorfFruct = fruct.sort()
console.log(sorfFruct.join(','));



const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]

const priceFilter = products.filter(n => n.price < 10000)
console.log(priceFilter)


const productNames = products.map(item => item.name);
console.log(productNames);

const totalSum = products.reduce((s, n) => s + n.price, 0);
console.log(`${totalSum} рубликоф`)

const num = [12, 45, 7, 33, 18]
console.log (num.some(n => n > 40), num.every(n => n > 5))