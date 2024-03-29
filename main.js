#! /usr/bin/env node
import inquirer from "inquirer";
const language = await inquirer.prompt([
    {
        type: 'checkbox',
        name: 'choice',
        message: 'choice the language :',
        choices: ['typescript', 'javascript', 'python', 'html', 'css']
    },
    {
        type: 'password',
        name: 'choice1',
        message: 'Enter a password = '
    }
]);
let course = language.choice;
let Fees = language.choice;
let Timing = language.choice;
console.log(`you are choice language : ${language.choice}`);
if (language.choice == 'typescript') {
    console.log('course : typescript');
    console.log('Fees : 11000/-');
    console.log('Timing: 12:00 PM');
}
else if (language.choice == 'javascript') {
    console.log('course : javascript');
    console.log('Fees : 12000/-');
    console.log('Timing: 1:00 PM');
}
else if (language.choice == 'python') {
    console.log('course : python');
    console.log('Fees : 13000/-');
    console.log('Timing: 2:00 PM');
}
else if (language.choice == 'html') {
    console.log('course : html');
    console.log('Fees : 14000/-');
    console.log('Timing: 3:00 PM');
}
else {
    console.log('course : css');
    console.log('Fees : 15000/-');
    console.log('Timing: 4:00 PM');
}
if (language.choice == 'typescript') {
    if (language.choice1 == 'fahad') {
        console.log('congratulation password is correct your are learn this program.');
    }
    else {
        console.log('Invalid password');
    }
}
if (language.choice == 'javascript') {
    if (language.choice1 == 'fahad') {
        console.log('congratulation password is correct your are learn this program.');
    }
    else {
        console.log('Invalid password');
    }
}
if (language.choice == 'python') {
    if (language.choice1 == 'fahad') {
        console.log('congratulation password is correct your are learn this program.');
    }
    else {
        console.log('Invalid password');
    }
}
if (language.choice == 'html') {
    if (language.choice1 == 'fahad') {
        console.log('congratulation password is correct your are learn this program.');
    }
    else {
        console.log('Invalid password');
    }
}
if (language.choice == 'css') {
    if (language.choice1 == 'fahad') {
        console.log('congratulation password is correct your are learn this program.');
    }
    else {
        console.log('Invalid password');
    }
}
