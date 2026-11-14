//Задание 1
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

//Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};
for (let name in obj) {
    console.log(name + " - зарплата " + obj[name] + " долларов");
}

//Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}
console.log(n);
console.log(num);

//Задание 6
let firstFriday = 3;

for (let day = firstFriday; day <= 31; day = day + 7) {
console.log("Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет.");
}

//Дополнительное задание 1
let k = 100;
let iterations = 0;

while (k >= 0) {
    k = k - 7;
    iterations++;
}
console.log(k);
console.log(iterations);

//Дополнительное задание 2
let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log(months[i] + " — " + (i + 1));
}

//Дополнительное задание 3
let book = {
    "название": "Под куполом",
    "автор": "Стивен Кинг",
    "год издания": 2009,
    "жанр": "фантастика",
};

for (let key in book) {
    console.log(key + ":" + book[key]);
}

//Дополнительное задание 4
let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

console.log("Массив:", numbers);

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Минимальное число:", min);