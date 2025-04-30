import prompt from "./prompt.js";

function imc(peso, altura) {
    return peso / (altura * altura);
}

const peso = parseFloat(prompt("Digite seu peso(Kg): "));
const altura = parseFloat(prompt("Digite sua altura(M): "));

const strats = [
    { test: p => p < 18.5, message: "Abaixo do peso" },
    { test: p => p >= 18.5 && p < 25, message: "Peso normal" },
    { test: p => p >= 25 && p < 30, message: "Sobrepeso" },
    { test: p => p >= 30, message: "Obeso" },
]


const result = strats.find(s => s.test(imc(peso, altura)));

if (result) {
    console.log(`De acordo com seu peso, você está ${result.message}`);
}