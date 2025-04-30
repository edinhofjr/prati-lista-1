import prompt from "./prompt.js";

const A = Number(prompt("Digite o lado A: "));
const B = Number(prompt("Digite o lado B: "));
const C = Number(prompt("Digite o lado C: "));

// Verificar se os lados formam um triângulo
if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores informados não formam um triângulo.");
}
