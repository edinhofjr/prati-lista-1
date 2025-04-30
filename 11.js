import prompt from "./prompt.js";

let acc = 0;

for (let i = 1; i <= 5; i++) {
    acc += Number(prompt(`Digite o ${i}º número: `));
}

console.log(`A soma dos números é: ${acc}`);