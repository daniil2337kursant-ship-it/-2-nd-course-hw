let clientOS = 0; 
let clientDeviceYear = 2015;

if (clientDeviceYear < 2015 && clientOS === 0) {
console.log("Установите облегченную версию приложения для iOS по ссылке");
}
 else if (clientDeviceYear < 2015 && clientOS === 1) {
console.log("Установите облегченную версию приложения для Android по ссылке");
} 
else if (clientOS === 0) {
console.log("Установите версию приложения для iOS по ссылке");
}
 else {
console.log("Установите версию приложения для Android по ссылке");
}