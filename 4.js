import prompt from "./prompt.js";

const select = [
    "Opção 1",
    "Opção 2",
    "Opção 3"
]

function display() {
    select.forEach((s, i) => {
        console.log(`${i + 1} - ${s}`);
    });

    const input = prompt("Digite uma seleção: ");

    if (select[input - 1]) {
        console.log(`Você selecionou ${select[input - 1]}`);
    }
}

display()