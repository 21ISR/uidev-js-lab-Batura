const sentence = "  javascript — это просто!  "
const clean = sentence.trim();
const result = clean[0].toUpperCase() + clean.slice(1)
console.log (result)

const first = "Иван"
const last = "Иванов"
const group = "Группа 21 ИСР"
const avg = "4.75"
console.log(`Студент ${last} ${first}, ${group}, средний балл: ${avg}`);  

const date = "2025-03-15"
const data = date.split('-') 
const newdata = data.reverse()
console.log(newdata.join('.')) 

const str = "Node.js разработчик"
console.log(str.startsWith("Node"), str.endsWith("разработчик"))

const sorokdva = "42"
console.log(sorokdva.padStart(8, "0"))