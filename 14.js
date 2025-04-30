import prompt from "./prompt.js";

const input = prompt("Digite um número: ");
let acc = 1;

for (let i = input; i > 0; i--) {
    acc *= i;
}

console.log(`O fatorial de ${input} é: ${acc}`);