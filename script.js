/*let a = 10;
alert(a);

a = 20;
alert(a);

let year = 2007;
alert(year);

let creator = "Brendan Eich";
alert(creator);

let b = 10;
let c = 2;
alert(b + c); // Сумма 12
alert(b - c);
alert(b * c);
alert(b / c);

let result = 2 ** 5;
alert(result);

a = 9;
b = 2;
alert(a % b);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: "Daniil",
    age: 25,
    isAdmin: true
}
alert(user.name);

let name = prompt("Как тебя зовут");
alert(`Привет, ${name}`);

let number = Number(prompt("Загадай любое число"));
let result1 = number * 2;
alert(result1);

let result2 = result1 + 10;
alert(result2);

let result3 = result2 / 2;
alert(result3);

let result4 = result3 - number;
alert(result4);

alert("Ответ 5");*/

let password = "Даниил";

let userPassword = prompt("Введите пароль");

if (userPassword === password) {
alert("Пароль введён верно");
} else {
alert("Пароль неверный");
}

let c = 0;
if (c > 0 && c < 10) {
console.log("верно");
} else {
console.log("неверно");
}

 c = 10;
if (c > 0 && c < 10) {
console.log("верно");
} else {
console.log("неверно");
}

c = -3;
if (c > 0 && c < 10) {
console.log("верно");
} else {
console.log("неверно");
}

c = 2;
if (c > 0 && c < 10) {
console.log("верно");
} else {
console.log("неверно");
}


let d = 56;
let e = 450;
if (d > 100 || e > 100) {
console.log("верно");
} else {
console.log("неверно");
}

 let a = '2';
 let b = '3';
alert(Number(a) + Number(b));


let monthNumber = 12; 

switch (monthNumber) {
case 12:
case 1:
case 2:
console.log('Зима');
break;

case 3:
case 4:
case 5:
console.log('Весна');
break;

case 6:
case 7:
case 8:
console.log('Лето');
break;

case 9:
case 10:
case 11:
console.log('Осень');
break;

default:
console.log('Неверный номер месяца!');
}