import prompt from "./prompt.js";

function oddNumber(number) {
    return Math.abs(number % 2) === 1;
}

const input = prompt("Digite um número para descobrir se é par ou ímpar: ");

if (oddNumber(Number(input))) {
    console.log("O número é ímpar.");
} else {
    console.log("O número é par.");
}
