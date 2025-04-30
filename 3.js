import prompt from "./prompt.js";

const input = prompt("Digite uma nota:");

const strats = [
    {callback: n => n >= 0 && n < 5, message: "Reprovado"},
    {callback: n => n >= 5 && n < 7, message: "Recuperação"},
    {callback: n => n >= 7 && n <= 10, message: "Aprovado"},
]

const res = strats.find(s => s.callback(input))

if (res) {
    console.log(`Com base na sua nota ${input}, você está ${res.message}`);
}