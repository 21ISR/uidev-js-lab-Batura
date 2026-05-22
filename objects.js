const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А",
    year: 1967,
    pages: 480,
    info(){
        return `${this.title}, ${this.author}, ${this.year} г., ${this.pages} стр.`
    }
}
console.log(book.info())

const {title, author, rating = 0 } = book
console.log(title)
console.log(author)
console.log(rating)


const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]

const sdalieStundenty = students.filter((stud) => {
    return stud.passed === true;
});

const names = sdalieStundenty.map((stud) => {
  return stud.name;
});
console.log(names);

const otlichnik = students.find((stud) => {
  return stud.grade > 4.5;
});
console.log(otlichnik);

const obshayaSumma = students.reduce((sum, stud) => {
  return sum + stud.grade;
}, 0); 

const sredniyBall = (obshayaSumma / students.length).toFixed(2);
console.log(sredniyBall);


