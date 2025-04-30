import prompt from "./prompt.js";

const numbers = [];

for (let i = 0; i < 2; i++) {
    numbers.push(Number(prompt(`Digite o ${i + 1}º número: `)));
}

numbers.sort((a, b) => a - b);
console.log(numbers)