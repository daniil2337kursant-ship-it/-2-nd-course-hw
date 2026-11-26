let number = prompt("Пожалуйста, введите любое число");

if (number.trim() === "" || isNaN(number)) {
alert("Ошибка!, Введите число.");
} 
else {
number = Number(number);

if (number % 2 === 0) {
alert("Число чётное");
} 
else {
alert("Число нечётное");
}
}