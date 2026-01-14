"use strict"

/*

let num1 = prompt("Insira um número: ");
let num2 = prompt("Insira um outro número: ");
let op = prompt("Insira o tipo de operação deseja: ");
let result;

if (op == "+"){ result = +num1 + +num2 };
else if (op == "-"){ result = +num1 - +num2 };
else if (op == "*"){ result = +num1 * +num2 };
else if (op == "/"){ result = +num1 / +num2 };
else if (op == "%"){ result = +num1 % +num2 };
else if (op == "**"){ result = (+num1) ** (+num2) };
else {alert("This is not a operand!")}

alert(result);

Task 1 If Else

let realName = prompt("What's the offial name of JavaScript?");

if (realName == "ECMAScript"){
    alert("Right!!");
} else {
    alert("You don't know? “ECMAScript”!");
};

Task 2 If Else


let number = prompt("Insert a number integer: ", "0");

if (number > 0){
    alert("1");
} else if (number < 0){
    alert("-1");
} else{
    alert("0");
}

Task 3 If Else

let result = (a + b < 4) ? "Below" : "Over";


let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let message = (login == 'Employee') ? "Hello" :
    (login == "Director") ? "Greetings" :
    (login == "") ? "No Login" :
    "";

alert(message)

let age = prompt("Insert your age: ");

if (!(age >= 14 && age <= 90)){
    alert("ok!")
}

if (age < 14 || age > 90){
    alert("ok!")
}

Task Logical operators

*/

let userName = prompt("What's your name? ");

if (userName === "admin"){
    let pass = prompt("What's the password? ");
    if (pass === "TheMaster"){
        alert("Welcome!");
    }
    else if (pass === null || pass === ""){
        alert("Canceled!");
    } else {
        alert("Wrong Password");
    }
} else if (userName === null || userName === ""){
    alert("Canceled!");
} else {
    alert("I don't know you!")
}

