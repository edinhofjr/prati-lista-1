import prompt from "./prompt.js";

const input = prompt("Digite uma idade: ");

const strats = [
    { callback: p => p > 0 && p <= 12, message: "Criança"},
    { callback: p => p > 12 && p <= 17, message: "Adolescente"},
    { callback: p => p > 17 && p <= 64, message: "Adulto"},
    { callback: p => p > 64, message: "Idoso"},
]

strats.forEach( strategy => {
    if (strategy.callback(Number(input))) {
        console.log(`Essa idade é de um(a) ${strategy.message}.`);
        return;
    }
})