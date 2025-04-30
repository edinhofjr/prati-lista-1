import prompt from "./prompt.js";

let acc = 0;
let times = 0;

while (true) {
    const input = Number(prompt("Digite um número: "));

    if (input === 0) {
        break;
    }

    acc += input;
    times++;
}

console.log(`A média dos números é: ${acc / times}`);