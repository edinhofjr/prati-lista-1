import prompt from "./prompt.js";

const quantidade = Number(prompt("Digite o número de maçãs compradas: "));

if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Quantidade inválida.");
} else {
    const precoUnitario = quantidade < 12 ? 0.30 : 0.25;
    const total = quantidade * precoUnitario;
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
}
