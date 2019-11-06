//Ключові слова для змінних:
var(old), let, const
let message = 'Hello';
alert(message);
message = 'World' ;
alert(message);
//число зажди має бути без лапок
const year = 2019;
alert(year);
//назви змінних формуються без пробілів і без "-", бо це мінус
//Camel case - це коли два слова пишуть разом і друге з великої літери
const nextYear = year + 1;
message = 'Next year will be ' + nextYear;
alert(message);
const userName = prompt('Enter your name');
// prompt виконується тільки в браузері
alert('Hello,' + userName);

//запитайте у користувача вік
//Обчисліть скільки буде йому років через рік
//Виведіть на екран

const userAge = parseFloat(prompt('Enter your age'));
const nextAge = addOne(userAge);
alert(nextAge);

if (userAge < 18) { // < > <= >= ==(not use this) === != !== ||(or) &&(and)
    alert('You are not adult');
} else {
    alert('You are adult');
}
// All scalar data types in JS
//string
//number
//Boolean (logical)
//undefined
//null
//Object
//Symbol (not connected to symbol)

function addOne(num) {
    const result = num + 1;
    return result; //return stop runing function
}
