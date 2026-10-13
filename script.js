let a = 10;
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

alert("Ответ 5");