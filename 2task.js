/*
Переменная lang может принимать 2 значения: 'ru' 'en'. 
Если она имеет значение 'ru', то в переменную arr запишем массив 
дней недели на русском языке, а если имеет значение 'en' – то на английском. 
Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
*/

var lang; 
var arr = [];
//решение 1
if (lang == 'ru') {
    arr = 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
//решение 2
switch (lang) {
    case 'ru':
        arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        break;
    case 'en':
        arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
}
//решение 3
var arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr[lang])